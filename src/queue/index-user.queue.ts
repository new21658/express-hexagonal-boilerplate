import { BaseQueue, IJob } from "@lib/queue/base.queue";
import { QueueNames } from "./queue-name.constant";

export class IndexUserQueue extends BaseQueue {
  constructor() {
    super(QueueNames.indexUserQueue);
  }
  _handler(job: IJob<any>) {
    console.log("index user queue run...", job.data);
  }
}
