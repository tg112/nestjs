import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['fkdifjiajoi'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 定義したもの以外、requestに含めない。セキュリティ要件
    }),
  );
  await app.listen(3000);
}
bootstrap();
