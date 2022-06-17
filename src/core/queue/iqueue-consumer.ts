export interface IQueueConsumer {
  handler(): Promise<void>;
}
