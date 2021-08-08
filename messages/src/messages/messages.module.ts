import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepositroy } from './messages.respositroy';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepositroy],
})
export class MessagesModule {}
