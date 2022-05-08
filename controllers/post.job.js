import asyncHandler from "express-async-handler";
import { JobZodSchema } from "../config/zod.schemas.js";
import Jobs from "../model/job.model.js";
import User from "../model/users.model.js";
// @desc create Job
// @route POST /createjob
// @access Private

const postJob = asyncHandler(async (req, res) => {
  const jobData = req.body;
  JobZodSchema.parse(jobData);
  const user = await User.findById(req.user.id);
  if (user.role !== "Recruiter") {
    res.status(400);
    throw new Error("Login as Recruiter to post job");
  }

  //Check if job already exists
  const jobExists = await Jobs.findOne(jobData);
  if (jobExists) {
    console.log(jobData);
    console.log(jobExists);
    res.status(400);
    throw new Error("Job already created");
  }

  try {
    const job = await Jobs.create({ user: user.id, ...jobData });
    res.status(201).json(job);
  } catch (err) {
    console.log(err);
    res.status(400);
    throw new Error("Job not created");
  }
});
export default postJob;
