import React from "react";
import "../style/player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
        {/* {sidebar} */}
        {/* {Body} */}
      </div>
      <Footer />
      {/* {footers} */}
    </div>
  );
}

export default Player;
