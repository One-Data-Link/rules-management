import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { globalSecrets } from '../main'

@Global()
@Module({
  imports:[
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {

        return {
          uri: configService.get<string>('NODE_ENV') === 'test'
            ? globalSecrets['DATABASE_URL_TEST']
            : globalSecrets['DATABASE_URL'],
          useNewUrlParser: true
        }
      
      },
      inject: [ConfigService],

    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
