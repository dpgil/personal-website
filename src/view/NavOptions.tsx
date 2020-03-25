import React from "react";

const navOptionsStyle: React.CSSProperties = {
  display: "inline-grid"
};

export const NavOptions = React.memo(function NavOptions() {
  return <div style={navOptionsStyle}>art.code.me</div>;
});
