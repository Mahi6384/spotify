import React from "react";
import "../style/Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@mui/material";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumnLogo"
          src="https://photos.google.com/share/AF1QipOEi9XYBlyxOrML7YdtWuIdY9jOwSiwNqwuH4r52qL3st4ETNkhQSCbYWeA2snVLQ/photo/AF1QipMSTo8_TGRTruCwZ1k4QRrirs7dCmiN2RKphM_Z?key=Ukkya0JQSXRqU204RUlLQnVnb2tYTU4xMUdMN0hn"
        ></img>
        <div className="footer_songInfo">
          <h4>Yeah</h4>
          <p>user</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className=" footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider size="small" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
