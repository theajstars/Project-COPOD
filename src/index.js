import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Dashboard from "./Components/Auth/User/Dashboard";
import TakeTest from "./Components/Auth/User/TakeTest";
import Test from "./Components/Auth/User/Test";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/auth" element={<Auth />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/new" element={<TakeTest />} />
      <Route path="/test/:test_id" element={<Test />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
