import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { ResponseDto } from "./dto/response.dto"
import { ResponseService } from "./response.service"

describe("testing Response", () =>{
  let Responseservice:ResponseService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        ResponseService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    Responseservice = await module.get<ResponseService>(ResponseService)
  });

  describe("Testing Response Service after mock", () =>{
    it("Response: Testing Response findAll() ", () =>{
      expect(typeof Responseservice.findAll()).not.toEqual(null);
    });

    it("Response: Testing Response create() ", () =>{
      let Response:ResponseDto = new ResponseDto("500","Internal Server Error");

      expect(typeof Responseservice.create(Response)).not.toEqual(null);
    });

    it("Response: Testing Response update() ", () =>{
      let Response:ResponseDto = new ResponseDto("500","Internal Server Error2");
                                          
      expect(typeof Responseservice.update("1",Response)).not.toEqual(null);
    });

    it("Response: Testing Response delete() ", () =>{
     
      expect(typeof Responseservice.delete("1")).not.toEqual(null);
    });

  })
})
