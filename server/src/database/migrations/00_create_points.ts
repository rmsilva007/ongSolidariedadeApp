import Knex from 'knex';
//table 00 porque a ordem de criação de tabelas importa

export async function up(knex: Knex) {
  
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();//referência da imagem
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
}

export async function down(knex: Knex) {// Deletar a tabela
  
  return knex.schema.dropTable('points');
}