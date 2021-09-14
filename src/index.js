import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Nimbulans from "./pages/Nimbulans";
import AmuRins from "./pages/AmuRins";

import "./index.css";
import Home from "./pages/Home";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nimbulans" element={<Nimbulans />} />
      <Route path="/amurins" element={<AmuRins />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
