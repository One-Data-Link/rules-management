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

  @Patch(':idheader')
  update(@Param('idheader') idheader: string, @Body() createHeaderDto: CreateHeaderDto){
    return this.headersService.update(idheader, createHeaderDto);
  }

  @Delete(':idheader')
  delete(@Param('idheader') idheader: string) {
    return this.headersService.delete(idheader);
  }

}
