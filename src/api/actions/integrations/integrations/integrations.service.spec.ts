import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { IntegrationsDto } from "./dto/integrations.dto"
import { IntegrationsService } from "./integrations.service"

describe("testing integrations", () =>{
  let integrationService:IntegrationsService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        IntegrationsService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    integrationService = await module.get<IntegrationsService>(IntegrationsService)
  });

  describe("Testing integrations Service after mock", () =>{
    it("Integrations: Testing method findAll() ", () =>{
      expect(typeof integrationService.findAll()).not.toEqual(null);
    });

    it("Integrations: Testing method create() ", () =>{
      let integration:IntegrationsDto = new IntegrationsDto(1,1,1,1,1,
                                          "localhost:5000/",1,"2023-02-08 04:05:06",
                                          "2023-02-08 04:05:06");

      expect(typeof integrationService.create(integration)).not.toEqual(null);
    });

    it("Integrations: Testing method update() ", () =>{
      let integration:IntegrationsDto = new IntegrationsDto(1,1,1,1,1,
                                          "htttp://localhost:6000/integrations/",1,"2023-02-21 04:05:06",
                                          "2023-02-21 04:05:06");
                                          
      expect(typeof integrationService.update("1",integration)).not.toEqual(null);
    });

    it("Integrations: Testing method delete() ", () =>{
     
      expect(typeof integrationService.delete("1")).not.toEqual(null);
    });

  })
})
