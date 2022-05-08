import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/users.model.js";

const authenticate = asyncHandler(async (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith("Bearer")) {
    try {
      const token = auth.split(" ")[1];
      //Verify token
      const decrypted = jwt.verify(token, process.env.JWT_SECRET);
      //Add user to request body excluding hashed password
      req.user = await User.findById(decrypted.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Token not found");
  }
});

export { authenticate };
