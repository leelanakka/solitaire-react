import React from "react";
import { Cards, EmptyCard, Default } from "./cards_data/cards";
import lodash from "lodash";
import Foundation from "./foundation";
import Tableau from "./tableau";
import Deck from "./stock";
import Stock from "./stock";
import App from "./App";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.app = new App();
    this.stock = new Stock();
    this.stock.addCard(Default);
    this.waste = new Deck();
    this.waste.addCard(EmptyCard);
    this.state = { waste: this.waste };
    this.setFoundations();
    this.setTableaus();
  }

  setTableaus() {
    for (let index = 0; index < 7; index++) {
      let tableau = new Tableau();
      tableau.addCard(Default);
      this.app.addTableau(tableau);
    }
  }

  setFoundations() {
    for (let index = 0; index < 4; index++) {
      let foundation = new Foundation();
      foundation.addCard(EmptyCard);
      this.app.addFoundation(foundation);
    }
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
              {this.stock.getLatestCard()}
            </div>
            <div>{this.waste.getLatestCard()}</div>
            {this.app.foundations.map(foundation => {
              return <div>{foundation.getLatestCard()} </div>;
            })}
          </div>
        </div>
        <div className="deck">
          {this.app.tableaus.map(tableau => {
            return <div>{tableau.getLatestCard()} </div>;
          })}
        </div>
      </div>
    );
  }

  render() {
    return <div className="main">{this.allCards()}</div>;
  }
}
export default Game;
