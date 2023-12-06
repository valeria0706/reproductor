import React, { useEffect } from "react";
import "./player.css";
import { useActionData, useLocation } from "react-router-dom";

export default function Player() {

const location = useLocation();

useEffect(()=>{

  if(location.state){
    apiClient
    .get("playlists/" + location.state?.id + "/tracks")
    .then((res)=>console.log(res.data));
  }
},[location.state])

  return(
     <div className="screen-container">
      <div className="left-player-body"></div>
     <div className="right-player-body"></div>
      </div>
     
  );
}
