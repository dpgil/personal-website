import React from "react";
import { MusicPlayer } from "./MusicPlayer";
import { Song } from "../../noise";

const wrapperStyle: React.CSSProperties = {
  paddingBottom: 25
};

const titleStyle: React.CSSProperties = {
  textAlign: "left"
};

const playerStyle: React.CSSProperties = {
  outline: "none",
  width: "100%"
};

interface MusicBlockProps {
  song: Song;
}

export const MusicBlock: React.FC<MusicBlockProps> = props => {
  const { song } = props;

  return (
    <div style={wrapperStyle}>
      <div style={titleStyle}>{song.name}</div>
      <MusicPlayer style={playerStyle} src={song.src} />
    </div>
  );
};
