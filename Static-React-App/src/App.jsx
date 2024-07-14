import React from "react";
import Header from "/src/Header.jsx";
import Main from "./MainContent";
import "./index.css";
import PropTypes from "prop-types";
export default function App() {
  const [darkMode, setTheme] = React.useState(false);
  function toggleTheme() {
    setTheme((prevState) => !prevState);
  }
  return (
    <div>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Main darkMode={darkMode} />
    </div>
  );
}
