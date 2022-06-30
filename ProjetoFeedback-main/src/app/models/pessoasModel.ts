import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
  } from 'typeorm';

import FeedbackModel from './feedbacksModel';
import SetorModel from './setoresModel';
  
  @Entity()
  
  export default class PessoaModel {
      @PrimaryGeneratedColumn()
        id: number;
  
      @Column()
        nome: string;

      @Column()
       email: string;
  
      @OneToMany(() => FeedbackModel, (feedbacks) => feedbacks.avaliado)
        feedbacks: FeedbackModel;

      @ManyToOne(() => SetorModel, (setor) => setor.pessoa)
        setor: SetorModel;
  }