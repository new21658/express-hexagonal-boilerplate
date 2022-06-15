import { GetAllUserService } from "./../../../core/services/user/get-all-user.service";
import { IController } from "../controller";
import { IRouter, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../types";

@injectable()
export class UserController implements IController {
  constructor(
    @inject(TYPES.Router) private router: IRouter,
    @inject(TYPES.GetAllUserService)
    private getAllUserService: GetAllUserService
  ) {
    router.get("/", this.getAll.bind(this));
  }
  getRouter(): IRouter {
    return this.router;
  }
  async getAll(req: Request, res: Response) {
    res.json(await this.getAllUserService.getAll());
  }
}
