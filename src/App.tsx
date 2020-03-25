import React from "react";
import { AppBody, AppHeader } from "./view";

const appStyles: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#fff",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "black"
};

export const App = React.memo(function App() {
  return (
    <div style={appStyles}>
      <AppHeader />
      <AppBody />
    </div>
  );
});
