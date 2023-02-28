import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationsDto } from './dto/notifications.dto'
import { DB } from '../../../database/db.entity'
import { Repository } from 'typeorm';
import { ExcuteRequestService } from '../excute-request/excute-request.service'

@Injectable()
export class NotificationsService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>,
                private executeRequestService:ExcuteRequestService){}

    async create(NotificationsDto: NotificationsDto) {
        
        try{
            return await this.DBRepository.query("SELECT insertNotifications("+NotificationsDto.userid + ",'"+
                                                    NotificationsDto.tonotification+"','"+
                                                    NotificationsDto.fromnotification+"','"+NotificationsDto.datecreated+
                                                    "','"+NotificationsDto.dateupdated+
                                                    "','"+NotificationsDto.templatenotification+"');")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
       
    }

    async getAll() {
        try{
           return await this.DBRepository.query("Select userid, tonotification, fromnotification,datecreated, "+
                                                "dateupdated, templatenotification, deleted from Notifications;")
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        };
    }

    async update(id:string, NotificationsDto:NotificationsDto){
        try{
            return await this.DBRepository.query("SELECT updateNotification("+id+","+NotificationsDto.userid + ",'"+
            NotificationsDto.tonotification+"','"+
            NotificationsDto.fromnotification+"','"+NotificationsDto.datecreated+
            "','"+NotificationsDto.dateupdated+
            "','"+NotificationsDto.templatenotification+"');");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async delete(id:string){
        try{
            return await this.DBRepository.query("SELECT deleteNotification("+id+");");
        }catch(Exception){
            return "Ocurrio un error: "+Exception;
        }
    }

    async sendMail(){
        try{
            const executeRequest=await this.executeRequestService.sendNotification();
            return executeRequest;
        }catch(Exception){
            return Exception;
        }
    }
    
}
