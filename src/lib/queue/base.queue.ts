import Queue, { JobOptions, Queue as IQueue } from "bull";
import { injectable, unmanaged } from "inversify";
import { bullConfig } from "@config/bull";

export interface IOptions extends JobOptions {}

export type IJob<T = any> = {
  id: number | string;
  data: T;
};

@injectable()
export abstract class BaseQueue<T = any> {
  private queue: IQueue;
  constructor(@unmanaged() private queueName: string) {
    this.queue = new Queue(this.queueName, bullConfig.redisHost);
    if (bullConfig.enableQueue) {
      this.queue.process(this._handler);
    }
  }
  add(data: T, options?: IOptions) {
    this.queue.add(data, options);
  }
  getQueueInstance() {
    return this.queue;
  }
  abstract _handler(job: IJob<T>): any;
}
