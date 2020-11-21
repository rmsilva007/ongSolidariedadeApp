import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;//items que estão vindo através da query params
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));//tirando os espaçamentos da direita e da esquerda do array numérico

    const points = await knex('points') // objeto com todos os dados dos points
      .join('point_items', 'points.id', '=', 'point_items.point_id')//todos os pontos que tem pelo menos um item recebidos na queryParams
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()//pontos de coleta distintos 
      .select('points.*');

    const serializedPoints = points.map(point => {
      return {
        ...point,//...todos os dados do point
        image_url: `http://192.168.1.30:3333/uploads/${point.image}`,
      }
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;//id vindo do params
    const point = await knex('points').where('id', id).first();//buscando o ponto de coleta
    if (!point) {
      return response.status(400).json({ message: 'Point not found. ' });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.1.30:3333/uploads/${point.image}`,
    };

    //listando todos items que tem relação com o determinado ponto de coleta
    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');
    return response.json({ point: serializedPoint, items });

  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx('points').insert(point);//garantia transacional

    const point_id = insertedIds[0];
    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          item_id,
          point_id,
        }
      });
    await trx('point_items').insert(pointItems);

    await trx.commit(); //commitando as transações
    return response.json({
      id: point_id,
      ...point,
    })
  }
}

export default PointsController;