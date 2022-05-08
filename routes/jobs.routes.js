import express from "express";
const router = express.Router();
import getJobs from "../controllers/get.jobs.js";
import postJob from "../controllers/post.job.js";
import { authenticate } from "../middleware/authenticator.js";

//All routes

router.route("/joblist").post(getJobs);

router.route("/postjob").post(authenticate, postJob);

export default router;
