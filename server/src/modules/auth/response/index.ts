import { IsString } from 'class-validator';

export class AuthUserResponce {
  @IsString()
  name: string;

  @IsString()
  nickName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  token: string;
}
