import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegrationsDto } from './dto/integrations.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class IntegrationsService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){}

    async create(IntegrationsDto: IntegrationsDto) {
        try{
            return await this.DBRepository.query("SELECT insertIntegration("+
                                            IntegrationsDto.idheader + ", "+
                                            IntegrationsDto.idresponse+", "+
                                            IntegrationsDto.idposttype+", "+
                                            IntegrationsDto.idmethod+", "+
                                            IntegrationsDto.idtemplate+", '"+
                                            IntegrationsDto.path+"', "+
                                            IntegrationsDto.userID+", '"+
                                            IntegrationsDto.dateCreated+"', '"+
                                            IntegrationsDto.dateUpdated+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll()  {
        try{
           return await this.DBRepository.query("SELECT idheader,idresponse,idposttype,idmethod,"+
                                    "idtemplate,path,userID,dateCreated,dateUpdated FROM integrations;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idintegration:string, IntegrationsDto: IntegrationsDto){
        try{
            return await this.DBRepository.query("SELECT updateIntegration("+idintegration+", "+
                                                IntegrationsDto.idheader + ", "+
                                                IntegrationsDto.idresponse+", "+
                                                IntegrationsDto.idposttype+", "+
                                                IntegrationsDto.idmethod+", "+
                                                IntegrationsDto.idtemplate+", '"+
                                                IntegrationsDto.path+"', "+
                                                IntegrationsDto.userID+", '"+
                                                IntegrationsDto.dateCreated+"', '"+
                                                IntegrationsDto.dateUpdated+"')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idintegrations:string){
        try{
            return await this.DBRepository.query("SELECT delteIntegration("+idintegrations+");");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async send(idintegrations:string){
        try{
            let query = "SELECT idheader,idresponse,idposttype,idmethod,"+
            "idtemplate,path,userID,dateCreated,dateUpdated,deleted FROM integrations WHERE idintegrations = "+idintegrations;    
            let endpointData = await this.DBRepository.query(query);

            
            return (endpointData) 
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }
}
