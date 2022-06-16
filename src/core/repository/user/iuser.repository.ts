import { UserEntity } from "../../entity/user.entity";
export interface IUserRepository {
  create(user: any): Promise<any>;
  update(userId: number, payload: Partial<UserEntity>): Promise<any>;
  getAll(): Promise<any>;
}
