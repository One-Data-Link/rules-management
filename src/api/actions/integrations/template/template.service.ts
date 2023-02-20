import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { templateDto } from './dto/template.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class TemplateService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){}

    async create(templateDto: templateDto) {
        try{
            return await this.DBRepository.query("SELECT insertTemplat('"+
            templateDto.template+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll() {
        try{
           return await this.DBRepository.query("SELECT idtemplate,template FROM template;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idtemplate:string, templateDto: templateDto){
        try{
            return await this.DBRepository.query("SELECT updateTemplate("+idtemplate+", '"+
            templateDto.template + "')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idtemplate:string){
        try{
            return await this.DBRepository.query("SELECT deleteTemplate("+idtemplate+")");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
