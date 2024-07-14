import React from "react";
import logo from "./reactjs-icon.png";
export default function Header(props) {
  return (
    <header className={props.darkMode ? "darkMode" : ""}>
      <div className="header-logo">
        <img src={logo} className="logo" alt="logo" />
        <h1>ReactFacts</h1>
      </div>
      <div className="theme-mode">
        <p>Light</p>
        <i
          className={
            props.darkMode ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"
          }
          onClick={props.toggleTheme}
        ></i>
        <p>Dark</p>
      </div>
    </header>
  );
}
