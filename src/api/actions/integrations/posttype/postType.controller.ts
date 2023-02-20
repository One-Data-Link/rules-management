import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { PosttypeService } from './posttype.service';
import { posttypeDto } from './dto/posttype.dto';

@Controller('post-type')
//@Auth()
@ApiTags('Post Type')
export class postTypeController {
  constructor(private readonly postTypeService: PosttypeService) {}

  @Post()
  create(@Body() posttypeDto: posttypeDto) {
    return this.postTypeService.create(posttypeDto);
  }

  @Get()
  findAll() {
    return this.postTypeService.findAll();
  }

  @Patch(':idposttype')
  update(@Param('idposttype') idposttype: string, @Body() posttypeDto: posttypeDto){
    return this.postTypeService.update(idposttype, posttypeDto);
  }

  @Delete(':idposttype')
  delete(@Param('idposttype') idposttype: string) {
    return this.postTypeService.delete(idposttype);
  }

}
