import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { IntegrationsModule } from '../src/api/actions/integrations/integrations/integrations.module';
import { DataType, newDb } from 'pg-mem';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Integrations } from '../src/api/actions/integrations/integrations/entity/intgrations.entity'

describe('Integrations (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<Integrations>;

  beforeEach(async () => {
    const db = newDb();
    db.public.registerFunction({
      name: 'automatic-rules',
      args: [],
      returns: DataType.text,
      implementation: (x) => `hello world ${x}`,
    });

    const connection = (await db.adapters.createTypeormConnection({
      type: 'postgres',
      entities: [Integrations],
      synchronize: true,
    })) as TypeOrmOptionsFactory;
    
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider('DATABASE_CONNECTION')
    .useValue(connection)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = app.get<Repository<Integrations>>('INTEGRATIONS');
  });

  afterEach(async () => {
    await repository.query('select *  from integrations;');
  });


  it('/ (GET)', async () => {
    return request(app.getHttpServer())
      .get('/integrations/')
      .expect(200)
  });

  
});
