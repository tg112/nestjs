import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { CurerntUserInterceptor } from './interceptors/current-user.interceptors';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    // Global scopeのinterceporの定義
    {
      provide: APP_INTERCEPTOR,
      useClass: CurerntUserInterceptor,
    },
  ],
})
export class UsersModule {}
