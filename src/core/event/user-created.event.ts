import { UserEntity } from "@/core/entity/user.entity";

export class UserCreatedEvent {
  constructor(public user: UserEntity) {}
}
