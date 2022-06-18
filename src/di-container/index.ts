import { Context } from "./context";
import { FastifyInstance } from "fastify";
import { AppDataSource } from "@config/typeorm/index";
import { GetAllUserService } from "@core/service/user/get-all-user.service";
import { Container } from "inversify";
import { UserController } from "@api/http/v1/user.controller";
import { CreateUserService } from "@core/service/user/create-user.service";
import { UserDataSource } from "@datasource/user.datasource";
import { Types } from "@types";
import { IndexUserQueue } from "@queue/index-user-queue";
import { EventEmitter2 } from "@lib/event/event-emitter";
import { UserCreatedEventListener } from "@event-listener/user-created.listener";

let diContainer: Container;

export const setupDIContainer = (app: FastifyInstance) => {
  console.log("setupDIContainer");
  diContainer = new Container();

  // System
  diContainer
    .bind(Types.Context)
    .toConstantValue(new Context<FastifyInstance>(app));
  diContainer.bind(Types.AppDataSource).toConstantValue(AppDataSource);
  diContainer.bind(Types.EventEmitter).toConstantValue(new EventEmitter2());

  // User
  diContainer.bind(Types.UserController).to(UserController);
  diContainer.bind(Types.CreateUserService).to(CreateUserService);
  diContainer.bind(Types.GetAllUserService).to(GetAllUserService);
  diContainer.bind(Types.UserRepository).to(UserDataSource);

  // Events
  diContainer.bind(Types.UserCreatedEventListener).to(UserCreatedEventListener);

  // Queues
  diContainer.bind(Types.IndexUserQueue).to(IndexUserQueue);

  return diContainer;
};
