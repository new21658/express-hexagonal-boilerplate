import { DataSource } from "typeorm";
import { User } from "./entity/user";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test",
  entities: [User],
  synchronize: false,
  migrationsRun: false,
  logging: false,
  migrationsTableName: "migrations",
  migrations: ["dist/**/migration/*.js"],
});

export const setupTypeOrm = async () => {
  await AppDataSource.initialize();
};
