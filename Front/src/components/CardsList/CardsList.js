import React, { useState, useEffect } from "react";
import './CardsList.css';
import Card from '../Card/Card'

function CardsList({ currendIndexCards, cardsData, activeTimeMatchs }) {
  const [currentCards, setCurrentCards] = useState([])
  useEffect(() => {
    if (currendIndexCards) {
      const newCurrentCards = cardsData.filter((card, index) => {
        if (index >= currendIndexCards.startIndex && index < currendIndexCards.endIndex) {
          return card
        }
      })
      setCurrentCards(newCurrentCards)
    }
    else {
      setCurrentCards(cardsData)
    }
  }, [currendIndexCards])
  return (
    <div className="cards">
      {currentCards.map((card) => (
        <Card key={card.id} card={card} activeTimeMatchs={activeTimeMatchs} />
      ))}
    </div>
  );
}

export default CardsList;