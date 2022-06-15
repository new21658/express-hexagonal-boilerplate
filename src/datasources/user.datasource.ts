import { injectable } from "inversify";
import { IUserRepository } from "../core/repositories/user/iuser.repository";

@injectable()
export class UserDataSource implements IUserRepository {
  async getAll(): Promise<any> {
    return [{ name: "foo" }, { name: "bar" }];
  }
  async create(user: any) {
    throw new Error("Method not implemented.");
  }
  async update(userId: number) {
    throw new Error("Method not implemented.");
  }
}
