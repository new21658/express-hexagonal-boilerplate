interface IOption {
  priority: number; // Optional priority value. ranges from 1 (highest priority) to MAX_INT  (lowest priority). Note that
  delay: number; // An amount of milliseconds to wait until this job can be processed. Note that for accurate delays, both
  attempts: number; // The total number of attempts to try the job until it completes.
}
export interface IQueueProducer {
  add(data: any, options: IOption): Promise<any>;
}
