import { Context } from "./../../di-container/context";
import { injectable, unmanaged } from "inversify";
import { FastifyInstance } from "fastify";
import path from "path";

@injectable()
export abstract class BaseController {
  constructor(
    private context: Context<FastifyInstance>,
    @unmanaged() protected basePath: string,
    @unmanaged() protected version: string
  ) {
    const app = this.context.app;
    const prefix = path.normalize(
      "/" + [this.version, this.basePath].join("/")
    );
    app.register(this.registerRoutes.bind(this), {
      prefix,
    });
  }
  abstract registerRoutes(app: FastifyInstance): Promise<void>;
  protected getContext(): Context<FastifyInstance> {
    return this.context;
  }
}
