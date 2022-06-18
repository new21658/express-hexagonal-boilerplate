import { IEventEmitter } from "./../../core/event/ievent-emitter";
import { EventEmitter } from "events";

export class EventEmitter2 implements IEventEmitter {
  private eventEmitter: EventEmitter;
  constructor() {
    console.log("event emitter init");
    this.eventEmitter = new EventEmitter();
  }
  on(eventName: string, handler: (data: any) => any) {
    this.eventEmitter.on(eventName, handler);
  }
  emit(eventName: string, data: any): void {
    this.eventEmitter.emit(eventName, data);
  }
}
