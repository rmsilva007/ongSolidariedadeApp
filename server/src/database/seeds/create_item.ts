import Knex from 'knex';
//inserindo  items na tabela 
//npm run knex:seed para executar esse arquivo 
export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Cestas Basicas', image: 'cestabasica.svg' },
    {title: 'Higiene Pessoal', image: 'higiene.svg' },
    {title: 'Roupas', image: 'roupas.svg' },
    {title: 'Material Escolar', image: 'materialescolar.svg' },
    {title: 'Brinquedos', image: 'brinquedos.svg' },
    {title: 'Móveis e Eletrodomesticos', image: 'moveis.svg' },
  ]);
}