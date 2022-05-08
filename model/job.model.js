import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    user: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Technology", "Finance", "Manufacturing", "Marketing"],
      required: [true, "Please enter job category"],
    },
    closeDate: {
      type: String,
      require: [true, "Please enter application closing date"],
    },
    companyName: {
      type: String,
      require: [true, "Please enter your company name"],
    },
    description: {
      type: String,
      require: [true, "Please add job description"],
    },
    email: {
      type: String,
      require: [true, "Please enter valid email address"],
    },
    location: {
      type: String,
      require: [true, "Please enter job location"],
    },
    salary: {
      type: String,
      require: [true, "Please enter salary amount"],
    },
    experience: {
      type: String,
      require: [true, "Please enter required years of experience"],
    },
    title: {
      type: String,
      require: [true, "Please enter job title"],
    },
    type: {
      type: String,
      require: [true, "Please enter job type"],
    },
    website: {
      type: String,
      require: [true, "Please enter company website"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Jobs", jobSchema);
