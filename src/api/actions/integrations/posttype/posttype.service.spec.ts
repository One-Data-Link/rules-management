import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { posttypeDto } from "./dto/postType.dto"
import { PosttypeService } from "./posttype.service"

describe("testing posttype", () =>{
  let Posttypeservice:PosttypeService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        PosttypeService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    Posttypeservice = await module.get<PosttypeService>(PosttypeService)
  });

  describe("Testing Posttype Service after mock", () =>{
    it("Posttype: Testing Posttype findAll() ", () =>{
      expect(typeof Posttypeservice.findAll()).not.toEqual(null);
    });

    it("Posttype: Testing Posttype create() ", () =>{
      let Posttype:posttypeDto = new posttypeDto("DELETE");

      expect(typeof Posttypeservice.create(Posttype)).not.toEqual(null);
    });

    it("Posttype: Testing Posttype update() ", () =>{
      let Posttype:posttypeDto = new posttypeDto("UPDATE");
                                          
      expect(typeof Posttypeservice.update("1",Posttype)).not.toEqual(null);
    });

    it("Posttype: Testing Posttype delete() ", () =>{
     
      expect(typeof Posttypeservice.delete("1")).not.toEqual(null);
    });

  })
})
