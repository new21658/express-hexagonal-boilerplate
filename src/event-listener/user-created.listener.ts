import { EventListener } from "../lib/event/event-listener";
import { inject, injectable } from "inversify";
import { EventType } from "../core/event/event-type";
import { Types } from "../types";

@injectable()
export class UserCreatedEventListener extends EventListener {
  constructor(@inject(Types.EventEmitter) eventEmitter) {
    super(eventEmitter, EventType.userCreated);
  }
  handler(data: any) {
    console.log("user created event...", data);
  }
}
