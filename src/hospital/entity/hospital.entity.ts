import {Column, Entity, OneToOne, PrimaryColumn} from 'typeorm';

@Entity('HOSP_INFO', { name: 'hospital' })
export class HospitalEntity {
  @PrimaryColumn({ name: 'IDX' })
  idx: string;

  @Column({ name: 'YKIHO' })
  ykiho: string;

  @Column({ name: 'HOSP_NM' })
  hospNm: string;

  @Column({ name: 'HOSP_TEL' })
  hospTel: string;

  @Column({ name: 'STATE' })
  state: number;
}
