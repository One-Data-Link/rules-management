import { Module } from '@nestjs/common';
import { PosttypeService } from './posttype.service';
import { postTypeController } from './postType.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [postTypeController],
    providers: [PosttypeService],
    imports: [TypeOrmModule.forFeature([DB])]
})
export class PosttypeModule {}
