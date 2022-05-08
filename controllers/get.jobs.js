import asyncHandler from "express-async-handler";
import Jobs from "../model/job.model.js";
// @desc get Jobs
// @route GET /joblist
// @access public

const getJobs = asyncHandler(async (req, res) => {
  let { category, city, joblist } = req.body;
  if (category === "Select Category") category = null;
  if (city === "Choose Region") city = null;
  if (category && city && joblist) {
    const titleJobs = await Jobs.find({
      title: joblist,
      category: category,
      location: city,
    });
    const companyJobs = await Jobs.find({
      companyName: joblist,
      category: category,
      location: city,
    });
    const allJobs = [...titleJobs, ...companyJobs];
    if (allJobs.length) return res.status(200).json(allJobs);
    else
      return res
        .status(400)
        .json({ message: "No available job for your query" });
  }
  if (!category && city && joblist) {
    const titleJobs = await Jobs.find({ title: joblist, location: city });
    const companyJobs = await Jobs.find({
      companyName: joblist,
      location: city,
    });
    const allJobs = [...titleJobs, ...companyJobs];
    return res.status(200).json(allJobs);
  } else if (!city && category && joblist) {
    const titleJobs = await Jobs.find({ title: joblist, category: category });
    const companyJobs = await Jobs.find({
      companyName: joblist,
      category: category,
    });
    const allJobs = [...titleJobs, ...companyJobs];
    return res.status(200).json(allJobs);
  } else if (!joblist && category && city) {
    const allJobs = await Jobs.find({ category: category, location: city });
    return res.status(200).json(allJobs);
  } else if (city && !joblist && !category) {
    const allJobs = await Jobs.find({ location: city });
    return res.status(200).json(allJobs);
  } else if (joblist && !city && !category) {
    const titleJobs = await Jobs.find({ title: joblist });
    const companyJobs = await Jobs.find({ companyName: joblist });
    const allJobs = [...titleJobs, ...companyJobs];
    return res.status(200).json(allJobs);
  } else if (category && !city && !joblist) {
    const allJobs = await Jobs.find({ category: category });
    return res.status(200).json(allJobs);
  } else {
    const allJobs = await Jobs.find();
    return res.status(200).json(allJobs);
  }
});
export default getJobs;
