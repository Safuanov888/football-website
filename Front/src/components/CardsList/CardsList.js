import React, { useState, useEffect } from "react";
import './CardsList.css';
import Card from '../Card/Card'

function CardsList({ currendIndexCards, cardsData }) {
  const [currentCards, setCurrentCards] = useState([])
  useEffect(() => {
    const newCurrentCards = cardsData.filter((card, index) => {
      if (index >= currendIndexCards.startIndex && index < currendIndexCards.endIndex) {
        return card
      }
    })
    setCurrentCards(newCurrentCards)
  }, [currendIndexCards])
  return (
    <div className="cards">
      {currentCards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
}

export default CardsList;