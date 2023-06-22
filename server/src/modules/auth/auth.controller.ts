import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
import { UserLoginDto } from 'src/modules/auth/dto';
import { AuthUserResponce } from 'src/modules/auth/response';
import { CreateUserDTO } from 'src/user/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUser(dto);
  }

  @Post('login')
  login(@Body() dto: UserLoginDto): Promise<AuthUserResponce> {
    return this.authService.loginUser(dto);
  }
}
