export interface IQueueProducer {
  add(data: any): Promise<any>;
}
