import { TYPES } from "./../../types";
import { Application, Router } from "express";
import { UserController } from "./v1/user.controller";
import { Container } from "inversify";

export const setupController = (app: Application, diContainer: Container) => {
  app.use(
    "/v1/users",
    diContainer.get<UserController>(TYPES.UserController).getRouter()
  );
};
