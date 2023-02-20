import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { MethodService } from './method.service';
import { MethodDto } from './dto/method.dto';

@Controller('method')
//@Auth()
@ApiTags('Method')
export class MethodController {
  constructor(private readonly methodService: MethodService) {}

  @Post()
  create(@Body() methodDto: MethodDto) {
    return this.methodService.create(methodDto);
  }

  @Get()
  findAll() {
    return this.methodService.findAll();
  }

  @Patch(':idmethod')
  update(@Param('idmethod') idmethod: string, @Body() methodDto: MethodDto){
    return this.methodService.update(idmethod, methodDto);
  }

  @Delete(':idmethod')
  delete(@Param('idmethod') idmethod: string) {
    return this.methodService.delete(idmethod);
  }

}
