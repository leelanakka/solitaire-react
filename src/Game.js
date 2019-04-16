import React from "react";
import { Cards, EmptyCard, Default } from "./cards_data/cards";
import lodash from "lodash";
import Foundation from "./foundation";
import Tableau from "./tableau";
import Stock from "./stock";
import App from "./App";
import Pile from "./pile";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.app = new App();
    this.stock = new Stock();
    this.stock.addCard(Default);
    this.waste = new Stock();
    this.waste.addCard(EmptyCard);
    this.setFoundations();
    this.setTableaus();
    this.pile = new Pile();
    this.state = { game: this.startGame() };
  }

  startGame() {
    const game = new App();
    game.addShuffledPile(this.initializePile());
    this.setFoundations(game);
    this.initializeStackPiles(game, 7);
    game.setShowCardPile(new Pile());
    return game;
  }

  initializePile() {
    const pile = new Pile();
    const shuffledCards = lodash.shuffle(Cards);
    shuffledCards.forEach(card => {
      pile.addCard(card);
    });
    return pile;
  }

  setTableaus() {
    const shuffledCards = lodash.shuffle(Cards);
    for (let index = 0; index <= 7; index++) {
      let tableau = new Pile();
      for (let i = 0; i <= index; i++) {
        if (i == index) {
          tableau.addCard(shuffledCards[index + i]);
          continue;
        }
        tableau.addCard(Default);
      }
      this.app.addTableau(tableau);
    }
  }

  setFoundations(game) {
    for (let index = 0; index < 4; index++) {
      let foundation = new Foundation();
      foundation.addCard(EmptyCard);
      this.app.addFoundation(foundation);
    game.addFoundation(new Pile())
    }
  }

  updateDeck() {
    const shuffledCards = lodash.shuffle(Cards);
    this.setState(state => {
      state.waste.addCard(shuffledCards[0]);
      return { state };
    });
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("id", event.target.id);
  }

  dropInFoundation(destination, event) {
    event.preventDefault();
    const src = event.dataTransfer.getData("id");
    console.log(src);
    this.setState(state => {
      const { app } = state;
      if (src === "wasteCard") {
        this.updateDeck();
      } else {
        const tableauCardId = src.slice(-1);
        console.log(tableauCardId);
        app.removeCardFromTableau(tableauCardId);
      }
      const card = document.getElementById(src).innerHTML;
      app.addCardToFoundation(destination, { unicode: card });
      return { app };
    });
  }

  getAllTableauCards() {
    return this.app.tableaus.map((tableau, index) => {
      return (
        <div className="card" id={"tableau_" + index}>
          {tableau.getAllCards().map((card, i) => {
            return (
              <div
                id={"card_" + i + "tableau_" + index}
                className="card"
                draggable="true"
                onDragStart={this.drag}
                onDrop={this.dropInTableau.bind(this, index)}
                onDragOver={this.allowDrop}
              >
                {card.unicode}
              </div>
            );
          })}
        </div>
      );
    });
  }

  getAllFoundationCards() {
    return this.app.foundations.map((foundation, index) => {
      return (
        <div
          id={"foundation_" + index}
          className="card"
          draggable="true"
          onDragStart={this.drag}
          onDrop={this.dropInFoundation.bind(this, index)}
          onDragOver={this.allowDrop}
        >
          {foundation.getLatestCard()}
        </div>
      );
    });
  }

  dropInTableau(destination, event) {
    event.preventDefault();
    const src = event.dataTransfer.getData("id");
    if (src === "wasteCard") {
      this.updateDeck();
    }
    this.setState(state => {
      const { app } = state;
      const card = document.getElementById(src).innerHTML;
      app.addCardToTableau(destination, { unicode: card });
      return { app };
    });
  }

  allCards() {
    return (
      <div>
        <div>
          <div className="stock">
            <div onClick={this.updateDeck.bind(this)} className="card">
              {this.stock.getLatestCard()}
            </div>
            <div
              id="wasteCard"
              onDragStart={this.drag}
              onDragOver={this.allowDrop}
              draggable="true"
              className="card"
            >
              {this.waste.getLatestCard()}
            </div>
            {this.getAllFoundationCards()}
          </div>
        </div>
        <div className="deck">{this.getAllTableauCards()}</div>
      </div>
    );
  }

  render() {
    return <div className="main">{this.allCards()}</div>;
  }
}
export default Game;
