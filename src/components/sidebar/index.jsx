import React from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4z-KNfGTZ6Q0hrkJewyJRIp7DgWTVZVal5w&usqp=CAU"
        className="profile-img"
        alt="profile"
      />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary/>}/>
      </div>
      <SidebarButton title="SignOut" to="" icon={<FaSignOutAlt/>}/>
    </div>
  );
}
