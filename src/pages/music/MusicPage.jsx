import React from "react";
import ReactAudioPlayer from "react-audio-player";
import comfortable from "../../noise/comfortable.mp3";

export const MusicPage = () => {
  // return <div>music page</div>;
  return (
    <div style={{ outline: "solid green 1px" }}>
      <ReactAudioPlayer src={comfortable} controls />
    </div>
  );
};
