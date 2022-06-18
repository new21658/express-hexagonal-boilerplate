import { Container } from "inversify";
import { Types } from "../types";

export const setupEventListner = (diContainer: Container) => {
  diContainer.get(Types.UserCreatedEventListener);
};
