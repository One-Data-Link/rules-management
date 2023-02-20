import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { templateController } from './template.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [templateController],
    providers: [TemplateService],
    imports: [TypeOrmModule.forFeature([DB])]
})
export class TemplateModule {}
