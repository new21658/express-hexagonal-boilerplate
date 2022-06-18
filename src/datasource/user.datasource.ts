import { AppDataSource } from "./../config/typeorm/index";
import { Types } from "./../types";
import { UserEntity } from "../core/entity/user.entity";
import { inject, injectable } from "inversify";
import { IUserRepository } from "../core/repository/user/user.repository";
import { UserModel } from "../database/model/user.model";

@injectable()
export class UserDataSource implements IUserRepository {
  constructor(
    @inject(Types.AppDataSource) private appDataSource: typeof AppDataSource
  ) {}

  async getAll(): Promise<UserEntity[]> {
    return await this.appDataSource.getRepository(UserModel).find();
  }

  async create(user: UserEntity) {
    const repo = this.appDataSource.getRepository(UserModel);
    return await repo.save(user);
  }
}
