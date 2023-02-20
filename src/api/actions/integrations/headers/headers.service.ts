import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHeaderDto } from './dto/create-header.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class HeadersService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){

    }

    async create(createHeaderDto: CreateHeaderDto) {
        try{
            return await this.DBRepository.query("SELECT insertHeader('"+
                                            createHeaderDto.headerkey + "', '"+
                                            createHeaderDto.headervalue+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT headerkey, headervalue FROM header;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idheader:string, createHeaderDto: CreateHeaderDto){
        try{
            return await this.DBRepository.query("SELECT updatetHeader("+idheader+", '"+
                                                createHeaderDto.headerkey + "', '"+
                                                createHeaderDto.headervalue+"')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idheader:string){
        try{
            return await this.DBRepository.query("SELECT deleteHeader("+idheader+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
