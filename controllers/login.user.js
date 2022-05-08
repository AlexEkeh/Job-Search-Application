import User from "../model/users.model.js";
import { LoginSchema } from "../config/zod.schemas.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { genToken } from "../config/basic.utils.js";

const loginUser = asyncHandler(async (req, res) => {
  const data = req.body;
  LoginSchema.parse(data);
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const { id, fullName: name, email, role } = user;
    res.status(200).json({ id, name, email, role, token: genToken(id) });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

export default loginUser;
