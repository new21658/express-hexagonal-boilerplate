import { AppDataSource } from "./config/typeorm/index";
import { TYPES } from "./types";
import "reflect-metadata";
import express, { Express, Request, Response, Router } from "express";
import { setupController } from "./api/http";
import { setupWebSocket } from "./api/web-socket";
import { setupDIContainer } from "./di-container";
import { setupTypeOrm } from "./config/typeorm";
// const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const runServer = async () => {
  const app: Express = express();
  const port = process.env.PORT;

  const diContainer = setupDIContainer(app);
  setupController(app, diContainer);
  setupWebSocket();
  await setupTypeOrm();

  app.listen(port, () => {
    console.log(`[server]: Server is running at https://127.0.0.1:${port}`);
  });
};

runServer();
