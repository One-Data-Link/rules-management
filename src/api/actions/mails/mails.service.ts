import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailsDto } from './dto/mails.dto'
import { DB } from '../../../database/db.entity'
import { Repository } from 'typeorm';
import { ExcuteRequestService } from '../excute-request/excute-request.service'

@Injectable()
export class MailsService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>,
                private executeRequestService:ExcuteRequestService){}

    async create(mailsDto: MailsDto) {
        try{
            return await this.DBRepository.query("SELECT insertMails("+mailsDto.userid + ", '"+
                                                    mailsDto.subject+"','"+mailsDto.tomail+"','"+
                                                    mailsDto.frommail+"','"+mailsDto.datecreated+
                                                    "','"+mailsDto.dateupdated+
                                                    "','"+mailsDto.templatemail+"');")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async getAll() {
        try{
           return await this.DBRepository.query("Select userid, subject, tomail, frommail,datecreated, "+
                                                "dateupdated, templatemail, deleted from emails;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(idmail:string, mailsDto:MailsDto){
        try{
            return await this.DBRepository.query("SELECT updateMail("+idmail+", '"+
                                                mailsDto.userid + "', '"+
                                                mailsDto.subject+"', '"+
                                                mailsDto.tomail+"', '"+
                                                mailsDto.frommail+"', '"+
                                                mailsDto.datecreated+"', '"+
                                                mailsDto.dateupdated+"', '"+
                                                mailsDto.templatemail+"')");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(idmail:string){
        try{
            return await this.DBRepository.query("SELECT deleteMail("+idmail+");");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async sendMail(){
        try{
            const executeRequest=await this.executeRequestService.sendMail();
            return executeRequest;
        }catch(Exception){
            return Exception;
        }
    }

}
