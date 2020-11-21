import knex from 'knex';
import path from 'path'; //variável para lidar com caminhos dentro 

//dirname é uma variável global que representa o diretório onde estamos executando o arquivo database.sqlite
const connection = knex({
  client: 'sqlite3', 
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;