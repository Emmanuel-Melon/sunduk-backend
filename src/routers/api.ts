import { Router } from "express";

import users from "../users/router";
import sunduks from "../sunduks/router";

const router = Router();

router.use("/sunduks", sunduks);
router.use("/users", users);


export default router;