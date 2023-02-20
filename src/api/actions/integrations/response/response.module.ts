import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ResponseController],
  providers: [ResponseService],
  imports: [TypeOrmModule.forFeature([DB])]
})
export class ResponseModule {}
