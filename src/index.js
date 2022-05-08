import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Hero from "./hero";
import Login from "./login";
import SignUp from "./signup";
import Resume from "./resume";
import CreateJob from "./createjob";
import JobList from "./joblist";
import data from "./sampledata";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/createresume" element={<Resume />} />
      <Route path="/createjob" element={<CreateJob />} />
      <Route path="/joblist" element={<JobList data={data} />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
