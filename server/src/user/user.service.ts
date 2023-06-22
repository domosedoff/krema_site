import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { users } from 'src/moks/user';
import { User } from 'src/user/models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from 'src/user/dto';
import { where } from 'sequelize';
import { AppError } from 'src/common/constants/error';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userRepo: typeof User) {}

  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  async findUserByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    dto.password = await this.hashPassword(dto.password);

    await this.userRepo.create({
      name: dto.name,
      nickName: dto.nickName,
      email: dto.email,
      password: dto.password,
    });
    return dto;
  }
}
