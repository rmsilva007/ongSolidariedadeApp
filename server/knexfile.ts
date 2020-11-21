//Arquivo para executar a tabelas criadas no dir. migrations
//dirname é a pasta corrente.Separados por virgulas porque da diferença entre sistemas operacionais na leitura do path
//arquivo knex_migrations em database.sqlite aramzena quais das migrations que já foram executadas
//seeds é arquivo de items pré cadastrados
import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true,
};