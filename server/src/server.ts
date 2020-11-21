import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());//todas as urls tem permissão de acessar a aplicação
app.use(express.json());
app.use(routes);

// .. é para voltar da pasta src ir para a pasta uploads
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));//função do express para servir arquivos estáticos de uma pasta específica

app.use(errors());

app.listen(3333);

