import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { HeadersService } from './headers.service';
import { CreateHeaderDto } from './dto/create-header.dto';

@Controller('headers')
//@Auth()
@ApiTags('Headers')
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto) {
    return this.headersService.create(createHeaderDto);
  }

  @Get()
  findAll() {
    return this.headersService.findAll();
  }

  @Get('integration/:id')
  findOne(@Param('id') id: string) {
    return this.headersService.findOne(id);
  }

  @Patch(':idheader/:idintegration')
  update(@Param('idheader') idheader: string, @Param('idintegration') idintegration: string, @Body() createHeaderDto: CreateHeaderDto){
    return this.headersService.update(idheader,idintegration, createHeaderDto);
  }

  @Delete(':idheader/:idintegration')
  delete(@Param('idheader') idheader: string, @Param('idintegration') idintegration: string,) {
    return this.headersService.delete(idheader,idintegration);
  }

}
