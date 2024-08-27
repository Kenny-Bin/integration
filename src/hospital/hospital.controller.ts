import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '../user/user.decorator';
import { HospitalService } from './hospital.service';
import { AuthGuard } from '../auth/auth.guard';
import { HospitalEntity } from './entity/hospital.entity';

@Controller('hospital')
@UseGuards(AuthGuard)
export class HospitalController {
  constructor(private hospitalRepository: HospitalService) {}

  @Get('/')
  async getHospitalInfo(@User() user): Promise<HospitalEntity> {
    const { ykiho } = user;

    const hospitalInfo = await this.hospitalRepository.getHospitalInfo(ykiho);

    return hospitalInfo;
  }
}
