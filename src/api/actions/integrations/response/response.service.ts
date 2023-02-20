import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseDto } from './dto//response.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ResponseService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){

    }

    async create(ResponseDto: ResponseDto) {
        try{
            return await this.DBRepository.query("SELECT insertResponse('"+
                                            ResponseDto.status + "', '"+
                                            ResponseDto.answer+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT idresponse,status,answer FROM response;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idresponse:string, ResponseDto: ResponseDto){
        try{
            return await this.DBRepository.query("SELECT updateResponse("+idresponse+", '"+
                                                ResponseDto.status+ "', '"+
                                                ResponseDto.answer+"')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idresponse:string){
        try{
            return await this.DBRepository.query("SELECT deleteResponse("+idresponse+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
