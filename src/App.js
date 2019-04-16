import React from "react";
import { Cards, EmptyCard, Default } from "./cards_data/cards";
import lodash from "lodash";
import Game from "./game";
import Pile from "./pile";
import Card from "./Card";

const defaultCard = new Card(Default);
const emptyCard = new Card(EmptyCard);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pile = new Pile();
    this.state = { game: this.startGame() };
  }

  startGame() {
    const game = new Game();
    game.addShuffledPile(this.initializePile());
    this.setFoundations(game);
    this.setTableaus(game);
    game.setShowCardPile(new Pile());
    return game;
  }

  initializePile() {
    const pile = new Pile();
    const shuffledCards = lodash.shuffle(Cards);
    shuffledCards.forEach(card => {
      pile.addCard(new Card(card));
    });
    return pile;
  }

  setTableaus(game) {
    for (let index = 0; index <= 7; index++) {
      let tableau = new Pile();
      for (let i = 0; i <= index; i++) {
        tableau.addCard(game.drawCard());
        tableau.blockLastCard();
      }
      tableau.revealLastCard();
      game.addTableau(tableau);
    }
  }

  setFoundations(game) {
    for (let index = 0; index < 4; index++) {
      game.addFoundation(new Pile());
    }
  }

  updateDeck() {
    this.setState(state => {
      const { game } = state;
      game.changeCard();
      return { game };
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
    this.setState(state => {
      const { game } = state;
      game.addCardToReservedPile(destination, src);
      return { game };
    });
  }

  showAllTableauCards(pile, index) {
    const totalCards = pile.cards.length;
    if (totalCards === 0) return <div>{emptyCard.getUnicode()}</div>;
    return pile.cards.map((card, i) => {
      if (i + 1 === totalCards) {
        card.revealCard();
      }
      if (card.isBlocked())
        return (
          <div style={this.getColor(card)} draggable="false">
            {card.getUnicode()}
          </div>
        );
      return (
        <div
          className="card"
          id={"tableau_" + index + "_" + (totalCards - i)}
          draggable="true"
          onDragStart={this.drag}
          style={this.getColor(card)}
        >
          {card.getUnicode()}
        </div>
      );
    });
  }

  getAllTableauCards() {
    const piles = this.state.game.tableaus;
    return piles.map((tableau, index) => {
      return (
        <div
          className="card"
          id={"tableau_" + index}
          onDrop={this.dropInTableau.bind(this, index)}
          onDragOver={this.allowDrop}
        >
          {this.showAllTableauCards(tableau, index)}
        </div>
      );
    });
  }

  getAllFoundationCards() {
    const piles = this.state.game.foundations;
    return piles.map((foundation, index) => {
      let card = foundation.getLastCard();
      if (!card) card = emptyCard;
      return (
        <div
          id={"foundation_" + index}
          className="card"
          draggable="true"
          onDragStart={this.drag}
          onDrop={this.dropInFoundation.bind(this, index)}
          onDragOver={this.allowDrop}
          style={this.getColor(card)}
        >
          {card.getUnicode()}
        </div>
      );
    });
  }

  getColor(card) {
    return { color: card.color };
  }

  showTopCard() {
    let card = this.state.game.getTopMostCard();
    if (!card) card = emptyCard;
    return (
      <div
        id="showCard"
        className="card"
        style={this.getColor(card)}
        draggable={this.state.game.showCardPile.isDraggable()}
        onDragStart={this.drag}
      >
        {card.getUnicode()}
      </div>
    );
  }

  dropInTableau(destination, event) {
    event.preventDefault();
    const src = event.dataTransfer.getData("id");
    this.setState(state => {
      const { game } = state;
      game.addCardToStackPile(destination, src);
      return { game };
    });
  }

  allCards() {
    return (
      <div>
        <div>
          <div className="stock">
            <div onClick={this.updateDeck.bind(this)} className="card">
              {defaultCard.getUnicode()}
            </div>
            <div
              id="wasteCard"
              onDragStart={this.drag}
              onDragOver={this.allowDrop}
              draggable="true"
              className="card"
            >
              {this.showTopCard()}
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
export default App;
