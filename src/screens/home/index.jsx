import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Favorites from "../favorites/index";
import Feed from "../feed/index";
import Library from "../library/index";
import Player from "../player/index";
import Trending from "../trending/index";
import "./home.css";
import Login from "../auth/login";

export default function Home() {
  return(
    <Router>
      <div className="main-body">
        <Login/>
        {/* <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes> */}
      </div>
    </Router>
  );
}
