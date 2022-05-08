import User from "../model/users.model.js";
import { UserSchema } from "../config/zod.schemas.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { genToken } from "../config/basic.utils.js";

const createUser = asyncHandler(async (req, res) => {
  const data = req.body;
  UserSchema.parse(data);
  const { email, password } = data;

  //Throw error if user already exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  //Write the data with hashed password to database
  const securedData = { ...data, password: hashedPass };

  const user = await User.create(securedData);
  if (user) {
    const { id, fullName: name, email, role } = user;
    res.status(201).json({ id, name, email, role, token: genToken(id) });
  } else {
    res.status(400);
    throw new Error("User not created");
  }
});
export default createUser;
