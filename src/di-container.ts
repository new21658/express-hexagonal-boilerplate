import { AppDataSource } from "./config/typeorm/index";
import { GetAllUserService } from "./core/service/user/get-all-user.service";
import { Application, Router } from "express";
import { Container } from "inversify";
import { UserController } from "./api/http/v1/user.controller";
import { CreateUserService } from "./core/service/user/create-user.service";
import { UserDataSource } from "./datasource/user.datasource";
import { TYPES } from "./types";
import { CreateUserQueue } from "./queue/create-user.queue";

let diContainer: Container;

export const setupDIContainer = (app: Application) => {
  diContainer = new Container();
  // System
  diContainer.bind(TYPES.App).toConstantValue(app);
  diContainer.bind(TYPES.Router).toConstantValue(Router());
  diContainer.bind(TYPES.AppDataSource).toConstantValue(AppDataSource);

  // User
  diContainer.bind(TYPES.UserController).to(UserController);
  diContainer.bind(TYPES.CreateUserService).to(CreateUserService);
  diContainer.bind(TYPES.GetAllUserService).to(GetAllUserService);
  diContainer.bind(TYPES.UserRepository).to(UserDataSource);

  // Queues
  diContainer.bind(TYPES.CreateUserQueue).to(CreateUserQueue);

  return diContainer;
};
