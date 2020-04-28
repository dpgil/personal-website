import React from "react";
import { songs } from "../../media/music";
import { MusicBlock } from "./MusicBlock";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto",
  paddingBottom: 20
};

export const MusicPage = () => {
  return (
    <div style={pageStyle}>
      <Description />
      {songs.map(s => (
        <MusicBlock key={s.name} song={s} />
      ))}
    </div>
  );
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 10,
  paddingTop: 20,
  fontSize: 20
};

const Description: React.FC = () => {
  return (
    <div style={descriptionStyle}>
      sometimes my computer makes noises. these are not polished but i think
      it's better that people can listen to them rather than letting them slowly
      die on my hard drive. the samples titled <u>comfortable</u> and{" "}
      <u>maybe let</u> were made with my friend vanessa
    </div>
  );
};
