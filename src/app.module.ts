import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { DB } from './database/db.entity';
import { IntegrationsEntity } from './api/actions/integrations/integrations/entity/intgrations.entity';
import { globalSecrets } from './main';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadersModule } from './api/actions/integrations/headers/headers.module';
import { PosttypeModule } from './api/actions/integrations/posttype/posttype.module';
import { MethodModule } from './api/actions/integrations/method/method.module';
import { DatabaseModule } from './database/database.module';
import { IntegrationsModule } from './api/actions/integrations/integrations/integrations.module'
import { MailsModule } from './api/actions/mails/mails.module';
import { NotificationsModule }  from './api/actions/notifications/notifications.module'


export function getEnvPath(): string {

  const env: string | undefined = process.env.NODE_ENV;
  const filename: string = env ? `${env}.env` : 'development.env';

  return filename;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvPath(),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {

        return {
          type: 'postgres',
          host: globalSecrets['DB_HOST'],
          port: +globalSecrets['DB_PORT'],
          username: globalSecrets['DB_USER'],
          password: globalSecrets['DB_PASSWORD'],
          database: globalSecrets['DB_NAME'],
          autoLoadEntities: true,
          entities: [DB, IntegrationsEntity],
          ssl: {
            ca: fs.readFileSync( path.resolve(__dirname, '../automaticrulesms-ca-certificate.crt'))
          },
        }
      },
      inject: [ConfigService],
    }),
    HeadersModule,
    DatabaseModule,
    MethodModule,
    PosttypeModule,
    IntegrationsModule,
    MailsModule,
    NotificationsModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
