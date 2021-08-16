import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    // DBに登録するためのインスタンスを作成する
    // 定義したmethodが使えるようになる
    const user = this.repo.create({ email, password });

    // 下記はthis.repo.save({ email, password })と同じ
    return this.repo.save(user);
  }

  async findOne(id: number) {
    if (!id) {
      return null;
    }
    const user = await this.repo.findOne(id);
    delete user.password;

    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  find(email: string) {
    return this.repo.find({ email: email });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.repo.findOne(id);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.repo.remove(user);
  }
}
