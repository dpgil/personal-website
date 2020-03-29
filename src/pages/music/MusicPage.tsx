import React from "react";
import { MusicPlayer } from "./MusicPlayer";
import { songs } from "../../noise";

const playerWrapperStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 25
};

const titleStyle: React.CSSProperties = {
  textAlign: "left"
};

const playerStyle: React.CSSProperties = {
  outline: "none",
  width: "100%"
};

export const MusicPage = () => {
  return (
    <div>
      <div>music page!</div>
      {songs.map(s => (
        <div key={s.name} style={playerWrapperStyle}>
          <div style={titleStyle}>{s.name}</div>
          <MusicPlayer style={playerStyle} src={s.src} />
        </div>
      ))}
    </div>
  );
};
