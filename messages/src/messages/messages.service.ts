import { MessagesRepositroy } from './messages.respositroy';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepositroy) {}
  // Service is creating its own dependencies
  // DONT DO THIS ON REAL APPS
  // USE DEPENDENCY INJECTION
  // this.messagesRepo = new MessagesRepositroy();
  // publicを付与することで、定義不要
  // this.messagesRepo = messagesRepo;
  //   }
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
