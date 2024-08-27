import { Controller, UseGuards, Get, Query } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard"
import { UserService } from "./user.service";
import { UserEntity } from "./entity/user.entity";
import { SearchUserDto } from "./dto/search-user.dto";
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

  /**
   * 회원 리스트 조회
   * @param user
   * @param schUserDto
   */
  @Get('/list')
  async getUserList(
    @User() user,
    @Query() schUserDto: SearchUserDto,
  ) : Promise<UserEntity[]> {
    const { ykiho, idx } = user;

    const userList = await this.userService.getUserList(ykiho, idx, schUserDto);

    return userList;

  }

}