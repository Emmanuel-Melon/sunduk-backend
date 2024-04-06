import { NextFunction, Response, Router, Request } from "express";
import { createUser } from "./operations/create";
import { deleteUser } from "./operations/delete";
import { editUser } from "./operations/edit";
import { getUserById } from "./operations/getById";
import { listUsers } from "./operations/list";

const userRouter = Router();

userRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await listUsers();
    res.json({
        users
    });
  }
);

userRouter.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserById(req.params.userId);
    res.json({
        user
    });
  }
);

userRouter.delete(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await deleteUser(req.params.userId);
    res.json({
        user
    });
  }
);

userRouter.put(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await editUser(req.params.userId);
    res.json({
        user
    });
  }
);

userRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await createUser(req.body);
    res.json({
        users
    });
  }
);

export default userRouter;