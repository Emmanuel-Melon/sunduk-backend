import routers from "./routers";
const express = require("express");
import cors from "cors";

export function init(app: any) {
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.set("trust proxy", "loopback");
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(routers);
}