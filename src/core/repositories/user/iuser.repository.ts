export interface IUserRepository {
  create(user: any): Promise<any>;
  update(userId: number): Promise<any>;
  getAll(): Promise<any>;
}
