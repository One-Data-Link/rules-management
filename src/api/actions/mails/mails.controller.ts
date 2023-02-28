import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { MailsService } from './mails.service';
import { MailsDto } from './dto/mails.dto';

@Controller('mails')
//@Auth()
@ApiTags('Mails')
export class MailsController {
  constructor(private readonly MailsService: MailsService) {}

  @Post()
  create(@Body() mailsDto: MailsDto) {
    return this.MailsService.create(mailsDto);
  }

  @Get()
  getAll() {
    return this.MailsService.getAll();
  }

  @Patch(':idmail')
  update(@Param('idmail') idmail: string, @Body() mailsDto:MailsDto){
    return this.MailsService.update(idmail, mailsDto);
  }

  @Delete(':idmail')
  delete(@Param('idmail') idmail: string) {
    return this.MailsService.delete(idmail);
  }

  @Post('send')
  sendMail(){
    const integration=this.MailsService.sendMail();
    return integration;
  }

}
