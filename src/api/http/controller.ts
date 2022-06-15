import { IRouter } from "express";

export interface IController {
  getRouter(): IRouter;
}
