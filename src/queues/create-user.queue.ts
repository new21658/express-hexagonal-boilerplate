import { JobEnum } from "./../core/constants/jobs";
import { ICreateUserQueue } from "../core/queues/icreate-user-queue";

export class CreateUserQueue implements ICreateUserQueue {
  constructor() {
    // setup bull queue
  }
  async add(job: JobEnum): Promise<any> {}
}
