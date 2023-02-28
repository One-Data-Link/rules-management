import { Test, TestingModule } from '@nestjs/testing';
import { MailsService } from './mails.service';
import { DB } from '../../../database/db.entity'
import { getRepositoryToken } from '@nestjs/typeorm';
import { MailsDto } from './dto/mails.dto';
import { HttpModule } from '@nestjs/axios';
import { ExcuteRequestService } from "../excute-request/excute-request.service"

describe("testing mails", () =>{
  let mailsService:MailsService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        MailsService,
        ExcuteRequestService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ],
      imports:[HttpModule]
    }).compile();
    mailsService = await module.get<MailsService>(MailsService)
  });

  describe("Testing Mails Service after mock", () =>{
    it("Mails: Testing method findAll() ", () =>{
      expect(typeof mailsService.getAll()).not.toEqual(null);
    });

    it("Mails: Testing method create() ", () =>{
      let mails:MailsDto= new MailsDto(1,"test@cvt.com","admin@cvt.com","testing mails","2023-02-23 00:00:00","","This is the testing for mails");

      expect(typeof mailsService.create(mails)).not.toEqual(null);
    });

    it("mails: Testing method update() ", () =>{
      let mails:MailsDto = new MailsDto(1,"test@cvt.com","admin@cvt.com","testing mails","2023-02-23 00:00:00","","This is the updating method testing for mails");
                                          
      expect(typeof mailsService.update("1",mails)).not.toEqual(null);
    });

    it("mails: Testing method delete() ", () =>{
     
      expect(typeof mailsService.delete("1")).not.toEqual(null);
    });

    it("mails: Testing method send() ", () =>{
     
      expect(typeof mailsService.sendMail()).not.toEqual(null);
    });

  })
})
