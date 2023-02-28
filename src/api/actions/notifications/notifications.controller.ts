import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
//import { Auth } from '../../auth/decorators/auth.decorator';
import { NotificationsService } from './notifications.service';
import { NotificationsDto } from './dto/notifications.dto';

@Controller('notifications')
//@Auth()
@ApiTags('Notifications')
export class NotificationsController {
  constructor(private readonly NotificationsService: NotificationsService) {}

  @Post()
  create(@Body() NotificationsDto: NotificationsDto) {
    return this.NotificationsService.create(NotificationsDto);
  }

  @Get()
  getAll() {
    return this.NotificationsService.getAll();
  }

  @Patch(':idnotification')
  update(@Param('idnotification') idnotification: string, @Body() NotificationsDto:NotificationsDto){
    return this.NotificationsService.update(idnotification, NotificationsDto);
  }

  @Delete(':idnotification')
  delete(@Param('idnotification') idnotification: string) {
    return this.NotificationsService.delete(idnotification);
  }

  @Post('send')
  sendMail(){
    const integration=this.NotificationsService.sendMail();
    return integration;
  }

}
