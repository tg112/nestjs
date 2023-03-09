import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // class-validatorとclass-transformerを使う
  app.useGlobalPipes(new ValidationPipe()); // Globalでpipeを適用する
  await app.listen(3000);
}
bootstrap();
