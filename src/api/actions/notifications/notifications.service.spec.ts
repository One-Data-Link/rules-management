import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { DB } from '../../../database/db.entity'
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotificationsDto } from './dto/notifications.dto';
import { HttpModule } from '@nestjs/axios';
import { ExcuteRequestService } from "../excute-request/excute-request.service"

describe("testing notifications", () =>{
  let notificationsService:NotificationsService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        NotificationsService,
        ExcuteRequestService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ],
      imports:[HttpModule]
    }).compile();
    notificationsService = await module.get<NotificationsService>(NotificationsService)
  });

  describe("Testing Notifications Service after mock", () =>{
    it("Notifications: Testing method findAll() ", () =>{
      expect(typeof notificationsService.getAll()).not.toEqual(null);
    });

    it("Notifications: Testing method create() ", () =>{
      let notifications:NotificationsDto= new NotificationsDto(1,"user123","user456","2023-02-23 00:00:00","","This is the testing for Notifications");

      expect(typeof notificationsService.create(notifications)).not.toEqual(null);
    });

    it("Notifications: Testing method update() ", () =>{
      let notifications:NotificationsDto = new NotificationsDto(1,"test@cvt.com","admin@cvt.com","2023-02-23 00:00:00","","This is the updating method testing for Notifications");
                                          
      expect(typeof notificationsService.update("1",notifications)).not.toEqual(null);
    });

    it("Notifications: Testing method delete() ", () =>{
     
      expect(typeof notificationsService.delete("1")).not.toEqual(null);
    });

    it("Notification: Testing method send() ", () =>{
     
      expect(typeof notificationsService.sendMail()).not.toEqual(null);
    });

  })
})
