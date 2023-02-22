import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { CreateHeaderDto } from "./dto/create-header.dto"
import { HeadersService } from "./headers.service"

describe("testing headers", () =>{
  let headerService:HeadersService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        HeadersService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    headerService = await module.get<HeadersService>(HeadersService)
  });

  describe("Testing Header Service after mock", () =>{
    it("Header: Testing method findAll() ", () =>{
      expect(typeof headerService.findAll()).not.toEqual(null);
    });

    it("Header: Testing method create() ", () =>{
      let header:CreateHeaderDto = new CreateHeaderDto("Authorization","1234556677777");

      expect(typeof headerService.create(header)).not.toEqual(null);
    });

    it("Header: Testing method update() ", () =>{
      let header:CreateHeaderDto = new CreateHeaderDto("Authorization","00000234556677777");
                                          
      expect(typeof headerService.update("1",header)).not.toEqual(null);
    });

    it("Header: Testing method delete() ", () =>{
     
      expect(typeof headerService.delete("1")).not.toEqual(null);
    });

  })
})
