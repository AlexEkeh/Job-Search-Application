import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import colors from "colors";
import jobsroute from "./routes/jobs.routes.js";
import userroute from "./routes/user.route.js";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorhandler.js";

// Connect to the database
connectDB();

// Initiate express, activate the json middleware and set PORT
const app = express();
app.use(cors());
app.use(json());
const PORT = process.env.PORT || 5000;

app.use("/api/jobs", jobsroute);

app.use("/api/user", userroute);

app.use(() => {
  throw new Error("End point not set");
});

app.use(errorHandler);

app.listen(PORT, console.log(colors.cyan(`Server started on port ${PORT}`)));
