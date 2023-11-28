import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "../feed/index";
import Trending from "../trending/index";
import Player from "../player/index";
import Favorites from "../favorites/index";
import "./home.css"
import Sidebar from "../../components/sidebar";
import Library from "../library";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Library/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
    </Router>
  );
}