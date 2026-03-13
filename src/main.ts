import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Credflow API')
    .setDescription(
      'API para gerenciamento de contratos e pagamentos financeiros',
    )
    .setVersion('1.0.0')
    .addTag('health', 'Verificação de saúde da API')
    .addTag('users', 'Gerenciamento de usuários')
    .addTag('contracts', 'Gerenciamento de contratos')
    .addTag('payments', 'Gerenciamento de pagamentos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 8080);
  console.log(
    `API documentada em: http://localhost:${process.env.PORT ?? 8080}/api/docs`,
  );
}
bootstrap();
