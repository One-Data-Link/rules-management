import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IntegrationsEntity{

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  idresponse:number;

  @Column()
  idposttype:number;

    @Column()
    idmethod:number;

    @Column()
    idtemplate:number;

    @Column()
    path:string;
    
    @Column()
    userID:number;

    @Column()
    dateCreated:string;

    @Column()
    dateUpdated:string;

    constructor(partial: Partial<IntegrationsEntity>) {
      Object.assign(this, partial);
    }

}