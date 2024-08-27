import { Controller, UseGuards, Get } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard"
import { UserService } from "./user.service";
import { UserEntity } from "./entity/user.entity";
import { User } from "./user.decorator";

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {

  constructor(
    private userService: UserService
  ) {}

  /**
   * 회원 정보 얻기
   */
  @Get('/')
  async getUser(@User() user): Promise<UserEntity> {
    const { ykiho, idx } = user;

    const userInfo = await this.userService.getUser(ykiho, idx);

    return userInfo;
  }

}