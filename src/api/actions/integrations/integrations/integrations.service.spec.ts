import { HttpService } from "@nestjs/axios"
import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { HeadersService } from "../headers/headers.service"
import { MethodService } from "../method/method.service"
import { PosttypeService } from "../posttype/posttype.service"
import { IntegrationsDto } from "./dto/integrations.dto"
import { ExcuteRequestService } from "../../excute-request/excute-request.service"
import { IntegrationsService } from "./integrations.service"
import { HttpModule } from '@nestjs/axios';

describe("testing integrations", () =>{
  let integrationService:IntegrationsService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        IntegrationsService,
        HeadersService,
        MethodService,
        PosttypeService,
        ExcuteRequestService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ],
      imports:[HttpModule]
    }).compile();
    integrationService = await module.get<IntegrationsService>(IntegrationsService)
  });

  describe("Testing integrations Service after mock", () =>{
    it("Integrations: Testing method findAll() ", () =>{
      expect(typeof integrationService.findAll()).not.toEqual(null);
    });

    it("Integrations: Testing method create() ", () =>{
      let integration:IntegrationsDto = new IntegrationsDto(1,1,"localhost:5000/",1,
                                            200,"OK","TEMPLATE","2023-02-08 04:05:06",
                                          "2023-02-08 04:05:06");

      expect(typeof integrationService.create(integration)).not.toEqual(null);
    });

    it("Integrations: Testing method update() ", () =>{
      let integration:IntegrationsDto = new IntegrationsDto(1,1,"localhost:5000/",1,
      200,"OK","TEMPLATE","2023-02-08 04:05:06",
    "2023-02-08 04:05:06");
                                          
      expect(typeof integrationService.update("1",integration)).not.toEqual(null);
    });

    it("Integrations: Testing method delete() ", () =>{
     
      expect(typeof integrationService.delete("1")).not.toEqual(null);
    });

  })
})
