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

 /* @Patch(':idheader')
  update(@Param('idheader') idheader: string, @Body() createHeaderDto: CreateHeaderDto){
    return this.MailsService.update(idheader, createHeaderDto);
  }

  @Delete(':idheader')
  delete(@Param('idheader') idheader: string) {
    return this.MailsService.delete(idheader);
  }*/

}
