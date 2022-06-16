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
  logging: false,
  migrationsTableName: "migrations",
  migrations: ["**/migration/*.ts"],
});

export const setupTypeOrm = async () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: [User],
    synchronize: false,
    logging: false,
  });
  await AppDataSource.initialize();
};
