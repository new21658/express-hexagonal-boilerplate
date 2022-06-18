import { UserEntity } from "../../entity/user.entity";
export interface IUserRepository {
  create(user: UserEntity): Promise<UserEntity>;
  getAll(): Promise<UserEntity[]>;
}
