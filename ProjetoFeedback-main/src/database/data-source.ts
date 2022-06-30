import 'reflect-metadata';
import { DataSource } from 'typeorm';
import FeedbackModel from '../app/models/feedbacksModel';
import PessoaModel from '../app/models/pessoasModel';
import SetorModel from '../app/models/setoresModel';

export default new DataSource({
  type: 'sqlite',
  database: './src/database/database.db',
  synchronize: true,
  logging: false,
  entities: [
    FeedbackModel,
    SetorModel,
    PessoaModel
  ],
  migrations: [],
  subscribers: [],
});
