import React, { useState, useEffect } from 'react';
import './App.css';
import './Memorygame.css';

const MemoryGame = () => {
  const cards = [    '🐶',    '🐱',    '🐭',    '🐹',    '🐰',    '🦊',    '🐻',    '🐼', '🤖' ];

  const [cardsState, setCardsState] = useState(
    cards.concat(cards).sort(() => Math.random() - 0.5)
  );
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (cardsState[firstCard] === cardsState[secondCard]) {
        setScore(score + 1);
        setCardsState(cardsState.filter((_, index) => index !== firstCard && index !== secondCard));
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  }, [cardsState, flippedCards, score]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleReset = () => {
    setCardsState(cards.concat(cards).sort(() => Math.random() - 0.5));
    setScore(0);
    setFlippedCards([]);
  };

  return (
    <>
   <div className="d-flex flex-column justify-content-center w-100 h-100">
  <div className="d-flex flex-column justify-content-center align-items-center">
    <div className="btn-group my-5">
      <a href="https://codepen-api-export-production.s3.us-west-2.amazonaws.com/zip/PEN/pyBNzX/1578778289271/pure-css-gradient-background-animation.zip">.</a>
    </div>
  </div>
</div>

    <div className="memory-game">
      <h1>Memory Game</h1>
      <div className="score">Score: {score}</div>
      <div className="cards-container">
        {cardsState.map((card, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flippedCards.includes(index) ? card : ''}
          </div>
        ))}
      </div>
      {cardsState.length === 0 && (
        <button className="reset-button" onClick={handleReset}>
          Play again
        </button>
      )}
    </div>
    </> 
  );
};

export default MemoryGame;
