import React from "react";

export const cardData = [
  {
    img: "./src/images/katie.png",
    rating: "5.0",
    ratingCount: "(6)",
    cardTitle: "Life lessons with Katie Zaferes",
    price: "$136",
  },
  {
    img: "./src/images/wedphoto.png",
    rating: "5.0",
    ratingCount: "(30)",
    cardTitle: "Learn wedding photography",
    price: "$125",
  },
  {
    img: "./src/images/bike.png",
    rating: "4.8",
    ratingCount: "(2)",
    cardTitle: "Group Mountain Biking",
    price: "$50",
  },
];

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={props.img} alt="card-image" />
      <div>
        <p className="rating">
          <i className="fa-solid fa-star"></i> {props.rating}{" "}
          <span>{props.ratingCount} .USA</span>
        </p>
        <h2>{props.cardTitle}</h2>
        <p>
          <strong>From {props.price}</strong> <span> /person</span>
        </p>
      </div>
    </div>
  );
}
