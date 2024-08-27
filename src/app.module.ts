import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { HospitalModule } from "./hospital/hospital.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    HospitalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
