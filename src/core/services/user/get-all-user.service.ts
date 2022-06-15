import { IUserRepository } from "../../repositories/user/iuser.repository";
import { TYPES } from "./../../../types";
import { inject, injectable } from "inversify";

@injectable()
export class GetAllUserService {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository
  ) {}
  getAll() {
    return this.userRepository.getAll();
  }
}
