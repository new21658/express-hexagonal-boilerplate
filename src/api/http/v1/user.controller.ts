import { Context } from "@/di-container/context";
import { FastifyInstance } from "fastify";
import { GetAllUserService } from "@core/service/user/get-all-user.service";
import { BaseController } from "@lib/controller/base-controller";
import { inject, injectable } from "inversify";
import { Types } from "@types";
import { FastifyRequest } from "fastify";
import { CreateUserService } from "@core/service/user/create-user.service";
import { StatusCodes } from "http-status-codes";

const createUserSchema = {
  body: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      username: {
        type: "string",
      },
    },
    required: ["name", "username"],
  },
};
@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Types.Context) context: Context<FastifyInstance>,
    @inject(Types.GetAllUserService)
    private getAllUserService: GetAllUserService,
    @inject(Types.CreateUserService)
    private createUserService: CreateUserService
  ) {
    super(context, "/users", "v1");
  }
  async registerRoutes(app: FastifyInstance) {
    app.get("/", this.getAll.bind(this));
    app.post("/", { schema: createUserSchema }, this.create.bind(this));
  }

  async getAll(req: FastifyRequest) {
    return this.getAllUserService.getAll();
  }

  async create(req: FastifyRequest) {
    return this.createUserService.create({ ...(req.body as any) });
  }
}
