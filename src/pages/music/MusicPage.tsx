import React from "react";
import { MusicPlayer } from "./MusicPlayer";
import { songs } from "../../noise";

const playerWrapperStyle: React.CSSProperties = {};

const playerStyle: React.CSSProperties = {
  outline: "none"
};

export const MusicPage = () => {
  return (
    <div>
      <div>music page!</div>
      {songs.map(s => (
        <div key={s.name} style={playerWrapperStyle}>
          <MusicPlayer style={playerStyle} src={s.src} />
        </div>
      ))}
    </div>
  );
};
