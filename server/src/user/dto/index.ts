import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  nickName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
