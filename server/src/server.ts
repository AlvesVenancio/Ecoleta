/*
    Request Params: Parâmetros que vem na própria rota que identificam um recurso.
    Query Params: Parâmetros que vem na própria rota geralmente opcionais utilizados para filtros, paginação etc.
    Request Body: Parâmetros para criar/atualizar informações
*/

import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);