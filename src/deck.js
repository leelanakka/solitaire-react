import React from "react";

class Deck {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.unshift(card);
  }

  getLatestCard() {
    return (
      <div>
        <div className="card"> {this.cards[0].unicode} </div>
      </div>
    );
  }
}

export default Deck;