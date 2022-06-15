import { IUserRepository } from "../../repositories/user/iuser.repository";
import { TYPES } from "./../../../types";
import { inject, injectable } from "inversify";
import { ICreateUserQueue } from "../../queues/icreate-user-queue";
import { UserEntity } from "../../entities/user.entity";

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
