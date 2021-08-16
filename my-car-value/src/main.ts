import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// cookiesessionはimportが使えない
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['ajfioajijji'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // 定義している項目だけしか返さない
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
