import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { ResponseService } from './response.service';
import { ResponseDto } from './dto/response.dto';

@Controller('response')
//@Auth()
@ApiTags('Response')
export class ResponseController {
  constructor(private readonly ResponseService: ResponseService) {}

  @Post()
  create(@Body() responseDto: ResponseDto) {
    return this.ResponseService.create(responseDto);
  }

  @Get()
  findAll() {
    return this.ResponseService.findAll();
  }

  @Patch(':idresponse')
  update(@Param('idresponse') idheader: string, @Body() responseDto: ResponseDto){
    return this.ResponseService.update(idheader, responseDto);
  }

  @Delete(':idresponse')
  delete(@Param('idresponse') idheader: string) {
    return this.ResponseService.delete(idheader);
  }

}
