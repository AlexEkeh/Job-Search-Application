import express from "express";
const router = express.Router();
import createUser from "../controllers/create.user.js";
import loginUser from "../controllers/login.user.js";
import createResume from "../controllers/create.resume.js";
import { authenticate } from "../middleware/authenticator.js";

router.route("/create").post(createUser);

router.route("/login").post(loginUser);

router.route("/createresume").post(authenticate, createResume);

export default router;
