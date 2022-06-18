import { injectable, unmanaged } from "inversify";
import { IEventEmitter } from "../../core/event/ievent-emitter";

@injectable()
export abstract class EventListener {
  constructor(
    private eventEmitter: IEventEmitter,
    @unmanaged() private eventName: string
  ) {
    console.log("event listner");
    this.eventEmitter.on(this.eventName, this.handler.bind(this));
  }
  abstract handler(data: any);
}
