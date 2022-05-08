import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["Applicant", "Recruiter"],
      required: [true, "Enter your full name"],
    },
    fullName: {
      type: String,
      required: [true, "Enter your full name"],
    },
    email: {
      type: String,
      required: [true, "Enter valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter a password"],
    },
    applied: [String],
    posted: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
