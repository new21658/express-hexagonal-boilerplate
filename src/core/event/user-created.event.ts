import { UserEntity } from "./../entity/user.entity";

export class UserCreatedEvent {
  constructor(public user: UserEntity) {}
}
