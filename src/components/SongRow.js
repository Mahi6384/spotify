import React from "react";
import "../style/songRow.css";
import { useDataLayerValue } from "../DataLayer";
function SongRow({ track = "test" }) {
  return (
    <div className="songRow">
      <img className="songRow_album" src={track.album.images[0].url}></img>
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(",")}
          {track.album.name}{" "}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
