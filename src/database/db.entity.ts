import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DB {

  @PrimaryGeneratedColumn()
  id: string;

}