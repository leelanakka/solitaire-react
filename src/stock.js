import React from "react";

class Stock {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.unshift(card);
  }

  getLatestCard() {
    return (
      <div>
        <div className="card" draggable="true"> {this.cards[0].unicode} </div>
      </div>
    );
  }
}

export default Stock;