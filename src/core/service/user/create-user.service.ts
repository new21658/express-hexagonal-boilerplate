import { IEventEmitter } from "@/core/event/ievent-emitter";
import { IUserRepository } from "@/core/repository/user/iuser.repository";
import { Types } from "@types";
import { inject, injectable } from "inversify";
import { UserEntity } from "@/core/entity/user.entity";
import { EventType } from "@/core/event/event-type.constant";
import { UserCreatedEvent } from "@/core/event/user-created.event";

@injectable()
export class CreateUserService {
  constructor(
    @inject(Types.UserRepository) private userRepository: IUserRepository,
    @inject(Types.EventEmitter) private eventEmitter: IEventEmitter
  ) {}
  public async create(payload: UserEntity): Promise<UserEntity> {
    const result = await this.userRepository.create(payload);
    this.eventEmitter.emit(EventType.userCreated, new UserCreatedEvent(result));
    return result;
  }
}
