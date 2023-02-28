import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [HeadersController],
    providers: [HeadersService],
    exports: [HeadersService],
    imports: [TypeOrmModule.forFeature([DB])]
})
export class HeadersModule {}
