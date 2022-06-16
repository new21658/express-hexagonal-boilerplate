export class UserEntity {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public password: string,
    public created_at: string,
    public updated_at: string
  ) {}
}
