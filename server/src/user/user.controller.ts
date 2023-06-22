import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto';
import { UserService } from 'src/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUsers(@Body() dto: CreateUserDTO) {
    return this.userService.createUser(dto);
  }
}
