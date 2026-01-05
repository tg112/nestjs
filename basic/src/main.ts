import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // 配列で許可したいオリジンを設定する
    // origin: ['http://example.com'],
    // methods: ['GET', 'POST']
  });
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
