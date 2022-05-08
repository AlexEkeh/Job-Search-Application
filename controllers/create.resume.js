import asyncHandler from "express-async-handler";
import User from "../model/users.model.js";
import { ResumeZOdSchema } from "../config/zod.schemas.js";
import Resume from "../model/resume.model.js";

// @desc create Resume
// @route POST /createresume
// @access Private

const createResume = asyncHandler(async (req, res) => {
  const data = req.body;
  ResumeZOdSchema.parse(data);
  const user = await User.findById(req.user.id);
  if (user.role !== "Applicant") {
    res.status(400);
    throw new Error("Login as an Applicant to create resume");
  }

  const resumeExists = await Resume.findOne(data);
  if (resumeExists) {
    res.status(400);
    throw new Error("Resume already exists");
  }

  try {
    const resume = await Resume.create({ user: user.id, ...data });
    const { FirstName, LastName, email } = resume;
    res.status(201).json({ FirstName, LastName, email });
  } catch (err) {
    console.log(err);
    res.status(400);
    throw new Error("Resume not created");
  }
});
export default createResume;
