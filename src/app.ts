import express from "express";
import * as dotenv from "dotenv";
export const app = express();
import { databaseURL } from "./config";
import { init } from "./init";

const port = 8000;

dotenv.config();

/** initialize middleware */
init(app);