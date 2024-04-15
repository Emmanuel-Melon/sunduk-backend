import { NextFunction, Response, Router, Request } from "express";
import { listSunduks } from "./operations/list";
import { createUser } from "./operations/create";
import { deleteUser } from "./operations/delete";
import { editUser } from "./operations/update";
import { getUserById } from "./operations/getById";

const sunduksRouter = Router();

sunduksRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sunduks = await listSunduks();
      res.json({
          sunduks
      });
    } catch (error) {
      next(error);
    }
  }
);


export default sunduksRouter;