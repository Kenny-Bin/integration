import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./entity/user.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async getUser(ykiho: string, idx: number): Promise<UserEntity> {
    const userInfo = await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.idx AS idx',
        'user.ykiho AS ykiho',
        'user.userNm AS userNm',
        'user.userId AS userId',
        'user.mobileNo AS mobileNo',
      ])
      .where('user.ykiho = :ykiho', { ykiho })
      .andWhere('user.isUse = "Y"')
      .andWhere('user.idx = :idx', { idx })
      .orderBy('user.userNm')
      .getRawOne();

    return userInfo;
  }


}