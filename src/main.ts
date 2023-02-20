import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { getSecrets } from './doppler-secrets';
import { initSwagger } from './app.swagger';
import { AllExceptionFilter } from './shared/filters/http-exception-filter';


export let globalSecrets = {};

async function bootstrap() {

  process.env.TZ = 'America/Los_Angeles';
  const secrets = await getSecrets();
  globalSecrets = secrets;
  console.log('gloablSecrets', globalSecrets);
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('RULES MANAGEMENT MS');
  const port = parseInt(globalSecrets['PORT'],10);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter());

  initSwagger(app);

  await app.listen(port);

  logger.debug(`Server is running at ${await app.getUrl()}/api/docs`);

}
bootstrap();
