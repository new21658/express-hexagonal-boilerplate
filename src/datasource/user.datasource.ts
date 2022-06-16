import { AppDataSource } from "./../config/typeorm/index";
import { TYPES } from "./../types";
import { UserEntity } from "../core/entity/user.entity";
import { inject, injectable } from "inversify";
import { IUserRepository } from "../core/repository/user/iuser.repository";
import { User } from "../config/typeorm/entity/user";

@injectable()
export class UserDataSource implements IUserRepository {
  constructor(
    @inject(TYPES.AppDataSource) private appDataSource: typeof AppDataSource
  ) {}

  async getAll(): Promise<any> {
    return await this.appDataSource.getRepository(User).find();
  }

  async create(user: UserEntity) {
    const repo = this.appDataSource.getRepository(User);
    return await repo.save(user);
  }

  async update(userId: number, payload: UserEntity) {
    const repo = this.appDataSource.getRepository(User);
    const newUser = repo.merge(payload);
    return await repo.save(newUser);
  }
}
