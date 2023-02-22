import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailsDto } from './dto/mails.dto'
import { DB } from '../../../../database/db.entity'
import { Repository } from 'typeorm';

@Injectable()
export class MailsService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>){}

    async create(mailsDto: MailsDto) {
        try{
            return await this.DBRepository.query("SELECT insertMails("+mailsDto.userID + ", '"+
                                                    mailsDto.subject+"','"+mailsDto.to+"','"+mailsDto.from+
                                                    "','"+mailsDto.dateCreated+"','"+mailsDto.dateUpdated+
                                                    "','"+mailsDto.template+"');")
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

}
