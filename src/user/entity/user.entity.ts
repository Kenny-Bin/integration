import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('USER_INFO', { name: 'users' })
export class UserEntity {
  @PrimaryColumn({ name: 'IDX' })
  idx: number;

  @Column({ name: 'YKIHO' })
  ykiho: string;

  @Column({ name: 'USER_ID' })
  userId: string;

  @Column({ name: 'USER_NM' })
  userNm: string;

  @Column({ name: 'USER_PW' })
  userPw: string;

  @Column({ name: 'PROF_IMG'})
  profile: string;

  @Column({ name: 'MOBILE_NO' })
  mobileNo: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'IS_USE' })
  isUse: number;
}
