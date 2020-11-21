import Knex from 'knex';

export async function up(knex: Knex) {
  // Criar a tabela
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table.integer('point_id')//todo id q aq refere-se a tabela point
      .notNullable()
      .references('id')
      .inTable('points');
    table.integer('item_id')//todo id q aq refere-se a tabela item
      .notNullable()
      .references('id')
      .inTable('items');
  });
}

export async function down(knex: Knex) {
  // Deletar a tabela
  return knex.schema.dropTable('point_items');
}