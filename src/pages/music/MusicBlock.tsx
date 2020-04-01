import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { Song } from "../../media/noise";

const wrapperStyle: React.CSSProperties = {
  paddingBottom: 10
};

const titleStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 5
};

const separatorStyle: React.CSSProperties = {
  // borderTop: "dotted black 2px",
  maxWidth: 120,
  margin: "auto",
  marginTop: 30,
  marginBottom: 20
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
      <div style={separatorStyle}></div>
      <div style={titleStyle}>{song.name}</div>
      <ReactAudioPlayer src={song.src} style={playerStyle} controls />
    </div>
  );
};
