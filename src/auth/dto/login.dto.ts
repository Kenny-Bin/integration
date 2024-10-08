import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  userPw: string;
}
