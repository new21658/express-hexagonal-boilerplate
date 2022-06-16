import { IUserRepository } from "../../repository/user/iuser.repository";
import { TYPES } from "../../../types";
import { inject, injectable } from "inversify";
import { ICreateUserQueue } from "../../queue/icreate-user-queue";
import { UserEntity } from "../../entity/user.entity";

@injectable()
export class CreateUserService {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: IUserRepository,
    @inject(TYPES.CreateUserQueue) private createUserQueue: ICreateUserQueue
  ) {}
  async create(payload: UserEntity) {
    await this.userRepository.create(payload);
    await this.createUserQueue.add(payload);
  }
}
