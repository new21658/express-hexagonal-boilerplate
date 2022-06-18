export class CreateUserQueue {
  constructor() {
    // setup bull queue
  }
  handler(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async add(payload): Promise<any> {}
}
