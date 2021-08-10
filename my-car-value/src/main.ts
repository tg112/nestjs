import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 定義している項目だけしか返さない
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
