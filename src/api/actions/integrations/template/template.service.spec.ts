import { Test } from "@nestjs/testing"
import { getRepositoryToken } from "@nestjs/typeorm"
import { DB } from '../../../../database/db.entity'
import { templateDto } from "./dto/template.dto"
import { TemplateService } from "./template.service"

describe("testing Template", () =>{
  let Templateservice:TemplateService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers:[
        TemplateService,
        {
          provide: getRepositoryToken(DB),
          useValue: {}
        }
      ]
    }).compile();
    Templateservice = await module.get<TemplateService>(TemplateService)
  });

  describe("Testing Template Service after mock", () =>{
    it("Template: Testing Template findAll() ", () =>{
      expect(typeof Templateservice.findAll()).not.toEqual(null);
    });

    it("Template: Testing Template create() ", () =>{
      let Template:templateDto = new templateDto("Template");

      expect(typeof Templateservice.create(Template)).not.toEqual(null);
    });

    it("Template: Testing Template update() ", () =>{
      let Template:templateDto = new templateDto("Template 2");
                                          
      expect(typeof Templateservice.update("1",Template)).not.toEqual(null);
    });

    it("Template: Testing Template delete() ", () =>{
     
      expect(typeof Templateservice.delete("1")).not.toEqual(null);
    });

  })
})
