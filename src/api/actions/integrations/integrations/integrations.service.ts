import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegrationsDto } from './dto/integrations.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';
import { HeadersService } from '../headers/headers.service';
import { MethodService } from '../method/method.service';
import { PosttypeService } from '../posttype/posttype.service';
import { ExcuteRequestService } from '../../excute-request/excute-request.service'

@Injectable()
export class IntegrationsService {
    
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>, 
                private headersService:HeadersService,
                private methodService:MethodService,
                private posttypeService:PosttypeService,
                private executeRequestService:ExcuteRequestService
                ){}
    

    async create(IntegrationsDto: IntegrationsDto) {
        try{
            return await this.DBRepository.query("SELECT insertIntegration("+
                                            IntegrationsDto.idposttype+", "+
                                            IntegrationsDto.idmethod+", '"+
                                            IntegrationsDto.path+"', "+
                                            IntegrationsDto.userid+", "+
                                            IntegrationsDto.status+", '"+
                                            IntegrationsDto.response+"', '"+
                                            IntegrationsDto.template+"', '"+
                                            IntegrationsDto.datecreated+"', '"+
                                            IntegrationsDto.dateupdated+"')")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async findAll()  {
        try{
           return await this.DBRepository.query("SELECT idposttype,idmethod,path,userID,"+
                                    "status,response,template,dateCreated,dateUpdated FROM integrations;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async findOne(idintegration:string) {
        try{
           return await this.DBRepository.query("SELECT * WHERE idintegration="+idintegration)
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idintegration:string, IntegrationsDto: IntegrationsDto){
        try{
            return await this.DBRepository.query("SELECT updateIntegration("+idintegration+", "+
                                                IntegrationsDto.idposttype+", "+
                                                IntegrationsDto.idmethod+", '"+
                                                IntegrationsDto.path+"', "+
                                                IntegrationsDto.userid+", "+
                                                IntegrationsDto.status+", '"+
                                                IntegrationsDto.response+"', '"+
                                                IntegrationsDto.template+"', '"+
                                                IntegrationsDto.datecreated+"', '"+
                                                IntegrationsDto.dateupdated+"')");
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
            const getHeaders=await this.headersService.findOne(idintegrations);
            //get methods
            const getMethods=await this.methodService.findOne(idintegrations);
            //get posttype
            const getPosttype=await this.posttypeService.findOne(idintegrations);
            //get integration information
            const getIntegration=await this.DBRepository.query("SELECT idposttype,idmethod,path,userID,status,"+
            "response,template,dateCreated,dateUpdated,deleted FROM integrations WHERE idintegrations = "+idintegrations)
            //send request
            const executeRequest=await this.executeRequestService.executeRequest(
                getHeaders, getMethods, getPosttype, getIntegration);
            return executeRequest
        }catch(Exception){
            return Exception;
        }
    }

}
