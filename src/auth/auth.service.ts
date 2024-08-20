import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../user/entity/user.entity";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepositary: Repository<UserEntity>,
  ) {}

  async findOne(loginDto: LoginDto): Promise<UserEntity> {
    const { userId, userPw } = loginDto;

    const user = await this.userRepositary.findOne({
      where : {
        userId,
        userPw,
      }
    });

    if (!user) {
      return null;
    }

    return user;

  }
}