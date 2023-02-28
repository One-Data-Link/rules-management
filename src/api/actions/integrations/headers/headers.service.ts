import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHeaderDto } from './dto/create-header.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class HeadersService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){}

    async create(createHeaderDto: CreateHeaderDto) {
        try{
            return await this.DBRepository.query("SELECT insertHeader("+
                                            createHeaderDto.idintegration+",'"+
                                            createHeaderDto.headerkey + "', '"+
                                            createHeaderDto.headervalue+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT idintegration, headerkey, headervalue, deleted FROM header;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async findOne(idintegration:string) {
        try{
           return await this.DBRepository.query("SELECT idheader, headerkey, headervalue, deleted"+ 
                                                " FROM header WHERE idintegration="+idintegration)
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idheader:string, idintegration:string,createHeaderDto: CreateHeaderDto){
        try{
            console.log("SELECT updatetHeader("+idheader+","+
            idintegration+", '"+
        createHeaderDto.headerkey + "', '"+
        createHeaderDto.headervalue+"')")
            return await this.DBRepository.query("SELECT updateHeader("+idheader+","+
                                                    idintegration+", '"+
                                                createHeaderDto.headerkey + "', '"+
                                                createHeaderDto.headervalue+"')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idheader:string, idintegration:string){
        try{
            return await this.DBRepository.query("SELECT deleteHeader("+idheader+","+idintegration+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
