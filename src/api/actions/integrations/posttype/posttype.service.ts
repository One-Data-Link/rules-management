import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { posttypeDto } from './dto/posttype.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class PosttypeService {

    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){}

    async create(posttypeDto: posttypeDto) {
        try{
            return await this.DBRepository.query("SELECT insertPostType('"+
            posttypeDto.type+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT idposttype,type FROM posttype;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idposttype:string, posttypeDto: posttypeDto){
        try{
            return await this.DBRepository.query("SELECT updatePostType("+idposttype+", '"+
            posttypeDto.type + "')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idposttype:string){
        try{
            return await this.DBRepository.query("SELECT deletePostType("+idposttype+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
