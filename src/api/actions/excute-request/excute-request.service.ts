import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, map, tap } from 'rxjs';
import { DB } from '../../../database/db.entity';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ExcuteRequestService {
    constructor(@InjectRepository(DB) private DBRepository:Repository<DB>,private readonly http: HttpService) {}

    async executeRequest(headers:any, method:any, posttype:any, integration:any) {
   
      switch(method[0].method.toUpperCase()){
        case 'POST':
          
          return this.http.post(integration[0].path,{headers:headers[0]}).pipe(
            tap((resp) => console.log(resp)),
            map((resp) =>  this.convertToPosttype(resp.data,posttype[0])),
            tap((data) =>  console.log(data)),
          );
        case 'PATCH':
          return this.http.patch(integration[0].path,{headers:headers[0]}).pipe(
            tap((resp) => console.log(resp)),
            map((resp) =>  this.convertToPosttype(resp.data,posttype[0])),
            tap((data) =>  console.log(data)),
          );
        case 'PUT':
          return this.http.put(integration[0].path,{headers:headers[0]}).pipe(
            tap((resp) => console.log(resp)),
            map((resp) =>  this.convertToPosttype(resp.data,posttype[0])),
            tap((data) =>  console.log(data)),
          );
        case 'GET':
          return this.http.get(integration[0].path,{headers:headers[0]}).pipe(
            tap((resp) => console.log(resp)),
            map((resp) =>  this.convertToPosttype(resp.data,posttype[0])),
            tap((data) =>  console.log(data)),
          );
      }
    }

    async sendMail() {

      return this.http.post("http://localhost:80/mailing/").pipe(
        tap((resp) => console.log(resp)),
        map((resp) =>  resp.data),
        tap((data) =>  console.log(data)),
      );

    }

    async sendNotification() {

      return this.http.post("http://localhost:80/notifications/").pipe(
        tap((resp) => console.log(resp)),
        map((resp) =>  resp.data),
        tap((data) =>  console.log(data)),
      );

    }

    convertToPosttype(res,type){
      switch(type.toUpperCase()){
        case 'JSON':
          return JSON.stringify(res);
        case 'XML':
          var parser = new DOMParser();
          return parser.parseFromString(res,"text/xml")
        case 'TEXT':
          return res.toString();
        case 'HTML':
          var parser = new DOMParser();
          return parser.parseFromString(res,"text/html")

      }
    }
}
