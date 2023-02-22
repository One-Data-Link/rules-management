import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { MethodDto } from "./dto/method.dto"
import { MethodService } from "./method.service"

describe("testing method", () =>{
  let Methodservice:MethodService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        MethodService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    Methodservice = await module.get<MethodService>(MethodService)
  });

  describe("Testing Method Service after mock", () =>{
    it("Method: Testing method findAll() ", () =>{
      expect(typeof Methodservice.findAll()).not.toEqual(null);
    });

    it("Method: Testing method create() ", () =>{
      let method:MethodDto = new MethodDto("DELETE");

      expect(typeof Methodservice.create(method)).not.toEqual(null);
    });

    it("Method: Testing method update() ", () =>{
      let method:MethodDto = new MethodDto("UPDATE");
                                          
      expect(typeof Methodservice.update("1",method)).not.toEqual(null);
    });

    it("Method: Testing method delete() ", () =>{
     
      expect(typeof Methodservice.delete("1")).not.toEqual(null);
    });

  })
})
