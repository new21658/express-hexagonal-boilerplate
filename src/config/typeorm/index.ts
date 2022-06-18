import { DataSource } from "typeorm";
import { UserModel } from "@database/model/user.model";

export const AppDataSource = new DataSource({
  name: "default",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  entities: [UserModel],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  migrationsTableName: "migrations",
  migrations: ["src/database/migration/*.{ts,js}"],
});

export const setupTypeOrm = async () => {
  await AppDataSource.initialize();
};
