import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcuteRequestService } from './excute-request.service';

import { HttpModule } from '@nestjs/axios';
import { DB } from '../../../database/db.entity'

@Module({
 // controllers: [IntegrationsController],
  providers: [ExcuteRequestService],
  imports: [ TypeOrmModule.forFeature([DB]), HttpModule],
  exports:[ExcuteRequestService]
})
export class ExecuteRequestModule {}
