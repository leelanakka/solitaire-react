import React from "react";
import { Cards, EmptyCard, Default } from "./cards_data/cards";
import lodash from "lodash";
import Foundation from "./foundation";
import Tableau from "./tableau";
import Deck from "./deck";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = new Tableau();
    this.deck.addCard(Default);
    this.waste = new Deck();
    this.waste.addCard(EmptyCard);
    this.foundation = new Foundation();
    this.foundation.addCard(EmptyCard);
    this.state = { deck: this.deck, waste: this.waste };
  }

  updateDeck() {
    const shuffledCards = lodash.shuffle(Cards);
    this.setState(state => {
      state.waste.addCard(shuffledCards[0]);
      return { state };
    });
  }

  allCards() {
    return (
      <div>
        <div>
          <div className="stock">
            <div onClick={this.updateDeck.bind(this)}>
              {this.deck.getAllCards()}
            </div>
            <div>{this.waste.getLatestCard()}</div>
            <div draggable="true">{this.foundation.getLatestCard()}</div>
            <div draggable="true">{this.foundation.getLatestCard()}</div>
            <div draggable="true">{this.foundation.getLatestCard()}</div>
            <div draggable="true">{this.foundation.getLatestCard()}</div>
          </div>
        </div>
        <div className="deck">
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
          <div draggable="true">{this.foundation.getLatestCard()}</div>
        </div>
      </div>
    );
  }

  render() {
    return <div className="main">{this.allCards()}</div>;
  }
}
export default Game;
