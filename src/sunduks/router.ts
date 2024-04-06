import { NextFunction, Response, Router, Request } from "express";
import { listSunduks } from "./operations/list";

const sunduksRouter = Router();

sunduksRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const sunduks = await listSunduks();
    res.json({
        sunduks
    });
  }
);


export default sunduksRouter;