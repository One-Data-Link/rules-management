import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { TemplateService } from './template.service';
import { templateDto } from './dto/template.dto';

@Controller('template')
//@Auth()
@ApiTags('Template')
export class templateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  create(@Body() templateDto: templateDto) {
    return this.templateService.create(templateDto);
  }

  @Get()
  findAll() {
    return this.templateService.findAll();
  }

  @Patch(':idtemplate')
  update(@Param('idtemplate') idtemplate: string, @Body() templateDto: templateDto){
    return this.templateService.update(idtemplate ,templateDto);
  }

  @Delete(':idtemplate')
  delete(@Param('idtemplate') idtemplate: string) {
    return this.templateService.delete(idtemplate);
  }

}
