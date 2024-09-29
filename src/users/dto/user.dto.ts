import { Expose } from 'class-transformer';
import { Role } from '../enums/role.enums';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  role: Role;
}
