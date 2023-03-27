import { IsEmail, IsString } from 'class-validator';

// incoming, outgoing dataの両方に使われる
export class CreateUserDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
