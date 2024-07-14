import React from "react";
import reactimg from "./reactjs-icon-2.png";
export default function Main(props) {
  return (
    <main className={props.darkMode ? "darkMode" : ""}>
      <h1>Fun facts about React</h1>
      <div>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={reactimg} className="main-img" />
      </div>
    </main>
  );
}
