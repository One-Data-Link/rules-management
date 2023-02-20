import { Module } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { IntegrationsController } from './integrations.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
  imports: [TypeOrmModule.forFeature([DB])]
})
export class IntegrationsModule {}
