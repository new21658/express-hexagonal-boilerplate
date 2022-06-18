import { IUserRepository } from "@/core/repository/user/iuser.repository";
import { Types } from "@types";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllUserService {
  constructor(
    @inject(Types.UserRepository) private userRepository: IUserRepository
  ) {}
  public async getAll() {
    return this.userRepository.getAll();
  }
}
