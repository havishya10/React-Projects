import React from "react";
import photogrid from "../images/photo-grid.png";

export default function Header() {
  return (
    <section className="section-header">
      <header>
        <img src={photogrid} alt="Photo Grid" />

        <div>
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </header>
    </section>
  );
}
