import React from "react";
import ReactAudioPlayer from "react-audio-player";

export const MusicPlayer = props => {
  return <ReactAudioPlayer src={props.src} style={props.style} controls />;
};
