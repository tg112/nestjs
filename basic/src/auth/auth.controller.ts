import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'generated/prisma/client.js';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async singup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.createUser(createUserDto);
  }

  @Post("signin")
  async signin(@Body() credentialsDto: CredentialsDto): Promise<{token: string}> {
    console.log('called')
    return await this.authService.signIn(credentialsDto);
  }
}
