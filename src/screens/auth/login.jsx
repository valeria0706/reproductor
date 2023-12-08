import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4z-KNfGTZ6Q0hrkJewyJRIp7DgWTVZVal5w&usqp=CAU"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="nombre">Best music</div>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
}
