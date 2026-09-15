import { Router } from "express";
import { login } from "../controller/users.js";

const router = Router();

// * Endpoints
router.post("/login", login);

export default router;
