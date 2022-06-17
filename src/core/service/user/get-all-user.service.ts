import { IUserRepository } from "../../repository/user/iuser.repository";
import { TYPES } from "../../../types";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllUserService {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository
  ) {}
  public async getAll() {
    // return this.userRepository.getAll();
    return [];
  }
}
