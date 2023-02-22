import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [MailsService],
  controllers: [MailsController],
  imports: [TypeOrmModule.forFeature([DB])]
})
export class MailsModule {}
