class App {
  constructor() {
    this.tableaus = [];
    this.foundations = [];
  }

  addTableau(tableau) {
    this.tableaus.push(tableau);
  }

  addFoundation(foundation) {
    this.foundations.push(foundation);
  }
}

export default App;