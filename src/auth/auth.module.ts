import * as config from "config";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { UserEntity } from "../user/entity/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: jwtConfig.secret,
    }),
  ],
  controllers : [AuthController],
  providers : [AuthService, LocalStrategy],
  exports: [JwtModule],

})
export class AuthModule {}