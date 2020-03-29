import React from "react";
import { songs } from "../../noise";
import { MusicBlock } from "./MusicBlock";

export const MusicPage = () => {
  return (
    <div>
      <div>music page!</div>
      {songs.map(s => (
        <MusicBlock key={s.name} song={s} />
      ))}
    </div>
  );
};
