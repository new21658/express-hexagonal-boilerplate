import { DataSource } from "typeorm";
import { User } from "../../database/model/user";

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
  migrations: ["src/database/migration/*.{ts,js}"],
});

export const setupTypeOrm = async () => {
  await AppDataSource.initialize();
};
