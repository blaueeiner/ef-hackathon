import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';
import * as admin from 'firebase-admin';
import helmet from 'helmet';
import { OpenApiNestFactory } from 'nest-openapi-tools';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(helmet());

  if (process.env.NODE_ENV !== 'production') {
    const openApiFilePath = './openapi-spec.yaml';

    await OpenApiNestFactory.configure(
      app,
      new DocumentBuilder()
        .setTitle('EF Hackathon API')
        .addBearerAuth()
        .addApiKey(null, 'x-api-key')
        .setVersion('1.0'),
      {
        fileGeneratorOptions: {
          enabled: true,
          outputFilePath: openApiFilePath,
        },
        clientGeneratorOptions: {
          enabled: true,
          type: 'typescript-axios',
          outputFolderPath: '../app/src/api/generated',
          openApiFilePath,
          additionalProperties: [
            'apiPackage=clients',
            'modelPackage=models',
            'withoutPrefixEnums=true',
            'withSeparateModelsAndApi=true',
          ].join(','),
          skipValidation: true,
        },
        webServerOptions: {
          enabled: true,
          path: 'api-docs',
        },
      },
      { operationIdFactory: (c: string, method: string) => method },
    );
  }

  const configService = app.get(ConfigService);

  const projectId = configService.getOrThrow<string>('projectId');

  admin.initializeApp({
    projectId,
    credential:
      process.env.NODE_ENV == 'production'
        ? admin.credential.applicationDefault()
        : admin.credential.cert(process.env.SERVICE_ACCOUNT_KEY),
    storageBucket: `${projectId}.appspot.com`,
  });

  await app.listen(3000);
}
bootstrap();
