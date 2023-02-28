import { Module } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { IntegrationsController } from './integrations.controller';
import { DB } from '../../../../database/db.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadersModule } from '../headers/headers.module';
import { MethodModule } from '../method/method.module';
import { PosttypeModule } from '../posttype/posttype.module';
import { ExecuteRequestModule } from '../../excute-request/execute-request.module'

@Module({
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
  imports: [ HeadersModule,
             MethodModule,
             PosttypeModule,
             ExecuteRequestModule,
             TypeOrmModule.forFeature([DB])]
})
export class IntegrationsModule {}
