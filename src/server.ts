import "reflect-metadata";
import express, { Express, Request, Response, Router } from "express";
import { setupController } from "./api/http";
import { setupWebSocket } from "./api/web-socket";
import { setupDIContainer } from "./inversify.config";
// const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const diContainer = setupDIContainer(app);
setupController(app, diContainer);
setupWebSocket();

app.listen(port, () => {
  console.log(`[server]: Server is running at https://127.0.0.1:${port}`);
});
