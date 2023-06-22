import { Injectable, BadRequestException } from '@nestjs/common';
import { AppError } from 'src/common/constants/error';
import { UserLoginDto } from 'src/modules/auth/dto';
import { CreateUserDTO } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthUserResponce } from 'src/modules/auth/response';
import { TokenService } from 'src/modules/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);
    return this.userService.createUser(dto);
  }

  async loginUser(dto: UserLoginDto): Promise<AuthUserResponce> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
    const token = await this.tokenService.generateJwtToken(dto.email);
    return { ...existUser, token };
  }
}
