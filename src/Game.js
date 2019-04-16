class Game {
  constructor() {
    this.deck = null;
    this.tableaus = [];
    this.foundations = [];
    this.showCardPile = null;
  }

  addShuffledPile(pile) {
    this.deck = pile;
  }
  
  drawCard() {
    return this.deck.drawCard();
  }

  setShowCardPile(pile) {
    this.showCardPile = pile;
  }

  reloadDeck() {
    if (this.showCardPile.isEmpty()) return;
    this.deck.addCard(this.showCardPile.drawCard());
    return this.reloadDeck();
  }

  changeCard() {
    if (this.deck.isEmpty()) {
      return this.reloadDeck()
    }
    this.showCardPile.addCard(this.drawCard());
  }
  
  addTableau(tableau) {
    this.tableaus.push(tableau);
  }

  getTopMostCard() {
    return this.showCardPile.getLastCard();
  }

  addFoundation(foundation) {
    this.foundations.push(foundation);
  }

  addCardToTableau(index, card) {
    this.tableaus[index].addCard(card);
  }

  removeCardFromFoundation(index) {
    this.foundations[index].cards.splice(-1,1);
  }

  removeCardFromTableau(index) {
    this.tableaus[index].cards.splice(-1,1);
  }

  addCardToFoundation(index, card) {
    this.foundations[index].addCard(card);
  }
}

export default Game;
