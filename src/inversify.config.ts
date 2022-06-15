import { GetAllUserService } from "./core/services/user/get-all-user.service";
import { Application, Router } from "express";
import { Container } from "inversify";
import { UserController } from "./api/http/v1/user.controller";
import { CreateUserService } from "./core/services/user/create-user.service";
import { UserDataSource } from "./datasources/user.datasource";
import { TYPES } from "./types";
import { CreateUserQueue } from "./queues/create-user.queue";

let diContainer: Container;

export const setupDIContainer = (app: Application) => {
  diContainer = new Container();
  // System
  diContainer.bind(TYPES.App).toConstantValue(app);
  diContainer.bind(TYPES.Router).toConstantValue(Router());

  // User
  diContainer.bind(TYPES.UserController).to(UserController);
  diContainer.bind(TYPES.CreateUserService).to(CreateUserService);
  diContainer.bind(TYPES.GetAllUserService).to(GetAllUserService);
  diContainer.bind(TYPES.UserRepository).to(UserDataSource);

  // Queues
  diContainer.bind(TYPES.CreateUserQueue).to(CreateUserQueue);

  return diContainer;
};
