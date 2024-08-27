import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HospitalEntity } from './entity/hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(HospitalEntity)
    private readonly hospitalRepository: Repository<HospitalEntity>,
  ) {}

  async getHospitalInfo(ykiho: string) {
    const codeList = await this.hospitalRepository
      .createQueryBuilder('hospital')
      .select(['hospital.ykiho AS ykiho', 'hospital.hospNm AS hospNm'])
      .where('hospital.ykiho = :ykiho', { ykiho })
      .getRawOne();

    return codeList;
  }
}
