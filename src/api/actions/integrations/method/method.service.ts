import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MethodDto } from './dto/method.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class MethodService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){

    }

    async create(methodDto: MethodDto) {
        try{
            return await this.DBRepository.query("SELECT insertMethod('"+
                                            methodDto.method+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT method FROM Method;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idmethod:string, MethodDto: MethodDto){
        try{
            return await this.DBRepository.query("SELECT updateMethod("+idmethod+", '"+
                                                MethodDto.method + "')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idmethod:string){
        try{
            return await this.DBRepository.query("SELECT deleteMethod("+idmethod+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
