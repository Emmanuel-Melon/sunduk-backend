import { NextFunction, Response, Router, Request } from "express";

const userRouter = Router();

userRouter.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    res.json({
        users: [{ id: 1}, {id: 2}]
    });
  }
);

export default userRouter;