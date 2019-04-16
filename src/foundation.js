
class Foundation {
  constructor() {
    this.cards = [];
  }
  addCard(card) {
    this.cards.unshift(card);
  }

  getLatestCard() {
    return this.cards[0].unicode;
  }
}
export default Foundation;
