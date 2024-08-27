import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { UserRO } from "./auth.interface";
import { AuthGuard } from "@nestjs/passport";
import { converProfileImage } from '../common/function';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService : AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() loginUserDto: LoginDto) : Promise<UserRO> {
    const _user = await this.authService.findOne(loginUserDto);

    if (!_user) {
      const error = { User : 'not found'};
      throw new HttpException({ error }, HttpStatus.UNAUTHORIZED);
    }

    // 토큰 발급
    const token = await this.authService.generateJWT(_user);

    let { idx, ykiho, userId, userNm, profile} = _user;

    // 프로필 이미지 등록했을 경우
    if (profile != null) {
      profile = converProfileImage(profile);
    }

    const user = { idx, ykiho, userId, userNm, profile, token};

    return { user };
  }
}