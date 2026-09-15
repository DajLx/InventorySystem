import { Router } from "express";
import * as userControllers from "../controller/users.js";

const router = Router();

router.post("/login", userControllers.login);
router.post("/signup", userControllers.signup);

export default router;
