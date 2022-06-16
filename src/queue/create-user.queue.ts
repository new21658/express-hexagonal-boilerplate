import { JobEnum } from "../core/constant/jobs";
import { ICreateUserQueue } from "../core/queue/icreate-user-queue";

export class CreateUserQueue implements ICreateUserQueue {
  constructor() {
    // setup bull queue
  }
  async add(job: JobEnum): Promise<any> {}
}
