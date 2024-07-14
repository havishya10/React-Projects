import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import { cardData } from "./components/Card";
function App() {
  const cards = cardData.map((cardEL) => {
    return (
      <Card
        img={cardEL.img}
        rating={cardEL.rating}
        ratingCount={cardEL.ratingCount}
        cardTitle={cardEL.cardTitle}
        price={cardEL.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Header />
      <section className="section-card">{cards}</section>
    </div>
  );
}

export default App;
