import { NextFunction, Response, Router, Request } from "express";
import { createUser } from "./operations/create";
import { deleteUser } from "./operations/delete";
import { editUser } from "./operations/edit";
import { getUserById } from "./operations/getById";
import { listUsers } from "./operations/list";

const userRouter = Router();

userRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await listUsers();
    res.json({
      users,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.get(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getUserById(req.params.userId);
      res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.delete(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await deleteUser(req.params.userId);
      res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.put(
  "/:userId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await editUser(req.params.userId);
      res.json({
        user,
      });
    } catch (error) {
      next(error);
    }
  }
);

userRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await createUser(req.body);
      res.json({
        users,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default userRouter;
