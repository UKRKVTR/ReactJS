import React from "react";
import { GiSun, GiEvilMoon } from "react-icons/gi";

function Theme(props) {
  const { isLight, setIsLight } = props;
  const sunStyle = {
    color: isLight ? "yellow" : "grey",
    boxShadow: isLight ? "0 0 10px grey" : "",
    backgroundColor: isLight ? "grey" : "",
    borderRadius: isLight ? "50%" : "",
  };
  const moonStyle = {
    color: isLight ? "grey" : "yellow",
    boxShadow: isLight ? "" : "0 0 10px grey",
    backgroundColor: isLight ? "" : "grey",
    borderRadius: isLight ? "" : "50%",
  };
  function setLight() {
    setIsLight(true);
  }
  function setDark() {
    setIsLight(false);
  }
  return (
    <div>
      <GiSun onClick={setLight} style={sunStyle} />
      <GiEvilMoon onClick={setDark} style={moonStyle} />
    </div>
  );
}

export default Theme;
