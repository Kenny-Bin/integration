import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../user/entity/user.entity";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepositary: Repository<UserEntity>,
    private readonly jwtService: JwtService,
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

  async generateJWT(user: UserEntity) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    const payload = {
      ykiho: user.ykiho,
      idx: user.idx,
      id: user.userId,
      name: user.userNm,
      exp: exp.getTime() / 1000,
    };

    const accessToken = await this.jwtService.sign(payload);

    return accessToken;
  }
}