import { Types } from "@types";
import { UserController } from "./v1/user.controller";
import { Container } from "inversify";

export const setupController = (diContainer: Container) => {
  diContainer.get<UserController>(Types.UserController);
};
