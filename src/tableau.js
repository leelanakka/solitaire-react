class Tableau {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  getAllCards() {
    return this.cards;
  }
}
export default Tableau;
