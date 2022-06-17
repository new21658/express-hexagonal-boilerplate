import { IQueueConsumer } from "./iqueue-consumer";
import { IQueueProducer } from "./iqueue-producer";

export interface ICreateUserQueue extends IQueueProducer, IQueueConsumer {}
