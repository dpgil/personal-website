import React from "react";
import { songs } from "../../noise";
import { MusicBlock } from "./MusicBlock";

const pageStyle: React.CSSProperties = {
  width: "90%",
  maxWidth: "700px",
  margin: "auto"
};

const descriptionStyle: React.CSSProperties = {
  textAlign: "left",
  paddingBottom: 25
};

export const MusicPage = () => {
  return (
    <div style={pageStyle}>
      <div style={descriptionStyle}>
        sometimes my computer makes noises. these are not at all polished but i
        think it's better that people can listen to them rather than letting
        them slowly die on my hard drive. a majority of these songs were
        co-produced with my friend vanessa
      </div>
      {songs.map(s => (
        <MusicBlock key={s.name} song={s} />
      ))}
    </div>
  );
};
