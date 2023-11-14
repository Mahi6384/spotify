import React from "react";
import "../style/Login.css";
import { loginUrl } from "../Spotify";

function Login() {
  return (
    <div className="login">
      {/*spotify logo*/}
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>
      {/*login with spoitfy button*/}
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login;
