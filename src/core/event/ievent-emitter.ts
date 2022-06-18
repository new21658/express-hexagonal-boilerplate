export interface IEventEmitter {
  emit(eventName: string, data: any): void;
  on(eventName: string, handler: (data: any) => any);
}
