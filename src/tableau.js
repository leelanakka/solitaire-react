import React from "react";

class Tableau {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.unshift(card);
  }

  getLatestCard(){
    return (<div>
      <div className="card" draggable="true"> {this.cards[0].unicode} </div>
    </div>)
  }

  drag(){
    
  }
  getAllCards() {
    return (
      <div>
        {this.cards.map(card => {
          return <div className="card" draggable="true" onDragOver={this.drag()}>{card.unicode}</div>;
        })}
      </div>
    );
  }
}
export default Tableau;
