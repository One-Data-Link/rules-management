import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { DB } from '../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExecuteRequestModule } from '../excute-request/execute-request.module';

@Module({
    providers: [NotificationsService],
    controllers: [NotificationsController],
    imports: [TypeOrmModule.forFeature([DB]), ExecuteRequestModule ]
})
export class NotificationsModule {}
