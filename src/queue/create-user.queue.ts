import { JobEnum } from "../core/constant/jobs";
import { ICreateUserQueue } from "../core/queue/icreate-user-queue";

export class CreateUserQueue implements ICreateUserQueue {
  constructor() {
    // setup bull queue
  }
  handler(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async add(payload): Promise<any> {}
}
