import { setupEventListner } from "./event-listener/index";
import "reflect-metadata";
import Fastify from "fastify";
import { setupController } from "./api/http";
import { setupWebSocket } from "./api/web-socket";
import { setupDIContainer } from "./di-container";
import { setupTypeOrm } from "./config/typeorm";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

const dotenv = require("dotenv");

dotenv.config();

const runServer = async () => {
  const port = +process.env.PORT;

  const fastify = Fastify({
    logger: true,
  }).withTypeProvider<JsonSchemaToTsProvider>();
  const diContainer = setupDIContainer(fastify);
  await setupTypeOrm();

  setupWebSocket();
  setupController(diContainer);
  setupEventListner(diContainer);

  try {
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

runServer();
