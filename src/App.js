import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Resume from "./pages/resume";
import CreateJob from "./pages/createjob";
import JobList from "./pages/joblist";
import Profile from "./pages/profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createresume" element={<Resume />} />
        <Route path="/createjob" element={<CreateJob />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
export default App;
