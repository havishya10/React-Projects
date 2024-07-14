import React from "react";
import trollImage from "../assets/troll.png"; // Import the image file

export default function Header() {
  return (
    <nav>
      <div className="nav-logo">
        <img src={trollImage} alt="Troll" /> {/* Use the imported image */}
        <h1>Meme Generator</h1>
      </div>
      <div className="nav-item">
        <p>React Course Project - 3 </p>
      </div>
    </nav>
  );
}
