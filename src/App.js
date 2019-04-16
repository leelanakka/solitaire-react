class App {
  constructor() {
    this.deck = null;
    this.tableaus = [];
    this.foundations = [];
  }

  addShuffledPile(pile) {
    this.deck = pile;
  }
  
  addTableau(tableau) {
    this.tableaus.push(tableau);
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

export default App;
