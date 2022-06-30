import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
  } from 'typeorm';

  import PessoaModel from './pessoasModel';
  
  @Entity()
  
  export default class FeedbackModel {
      @PrimaryGeneratedColumn()
        id: number;
  
      @Column()
        titulo: string;
  
      @Column()
        nivel: number;

      @Column()
       texto: string;
  
      @ManyToOne(() => PessoaModel, (avaliado) => avaliado.feedbacks)
        avaliado: PessoaModel;
  }