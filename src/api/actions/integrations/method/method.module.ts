import { Module } from '@nestjs/common';
import { MethodService } from './method.service';

import { MethodController } from './method.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MethodController],
  providers: [MethodService],
  imports: [TypeOrmModule.forFeature([DB])]
})
export class MethodModule {}
