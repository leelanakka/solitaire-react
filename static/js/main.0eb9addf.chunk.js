(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),d=t(5),i=t.n(d),u=t(1),l=t(2),n=t(8),s=t(6),c=t(9),v=[{suit:"spade",valu:1,color:"black",unicode:"\ud83c\udca1"},{suit:"spade",value:2,color:"black",unicode:"\ud83c\udca2"},{suit:"spade",value:3,color:"black",unicode:"\ud83c\udca3"},{suit:"spade",value:4,color:"black",unicode:"\ud83c\udca4"},{suit:"spade",value:5,color:"black",unicode:"\ud83c\udca5"},{suit:"spade",value:6,color:"black",unicode:"\ud83c\udca6"},{suit:"spade",value:7,color:"black",unicode:"\ud83c\udca7"},{suit:"spade",value:8,color:"black",unicode:"\ud83c\udca8"},{suit:"spade",value:9,color:"black",unicode:"\ud83c\udca9"},{suit:"spade",value:10,color:"black",unicode:"\ud83c\udcaa"},{suit:"spade",value:11,color:"black",unicode:"\ud83c\udcab"},{suit:"spade",value:12,color:"black",unicode:"\ud83c\udcad"},{suit:"spade",value:13,color:"black",unicode:"\ud83c\udcae"},{suit:"club",value:1,color:"black",unicode:"\ud83c\udcd1"},{suit:"club",value:2,color:"black",unicode:"\ud83c\udcd2"},{suit:"club",value:3,color:"black",unicode:"\ud83c\udcd3"},{suit:"club",value:4,color:"black",unicode:"\ud83c\udcd4"},{suit:"club",value:5,color:"black",unicode:"\ud83c\udcd5"},{suit:"club",value:6,color:"black",unicode:"\ud83c\udcd6"},{suit:"club",value:7,color:"black",unicode:"\ud83c\udcd7"},{suit:"club",value:8,color:"black",unicode:"\ud83c\udcd8"},{suit:"club",value:9,color:"black",unicode:"\ud83c\udcd9"},{suit:"club",value:10,color:"black",unicode:"\ud83c\udcda"},{suit:"club",value:11,color:"black",unicode:"\ud83c\udcdb"},{suit:"club",value:12,color:"black",unicode:"\ud83c\udcdd"},{suit:"club",value:13,color:"black",unicode:"\ud83c\udcde"},{suit:"diamond",value:1,color:"red",unicode:"\ud83c\udcc1"},{suit:"diamond",value:2,color:"red",unicode:"\ud83c\udcc2"},{suit:"diamond",value:3,color:"red",unicode:"\ud83c\udcc3"},{suit:"diamond",value:4,color:"red",unicode:"\ud83c\udcc4"},{suit:"diamond",value:5,color:"red",unicode:"\ud83c\udcc5"},{suit:"diamond",value:6,color:"red",unicode:"\ud83c\udcc6"},{suit:"diamond",value:7,color:"red",unicode:"\ud83c\udcc7"},{suit:"diamond",value:8,color:"red",unicode:"\ud83c\udcc8"},{suit:"diamond",value:9,color:"red",unicode:"\ud83c\udcc9"},{suit:"diamond",value:10,color:"red",unicode:"\ud83c\udcca"},{suit:"diamond",value:11,color:"red",unicode:"\ud83c\udccb"},{suit:"diamond",value:12,color:"red",unicode:"\ud83c\udccd"},{suit:"diamond",value:13,color:"red",unicode:"\ud83c\udcce"},{suit:"heart",value:1,color:"red",unicode:"\ud83c\udcb1"},{suit:"heart",value:2,color:"red",unicode:"\ud83c\udcb2"},{suit:"heart",value:3,color:"red",unicode:"\ud83c\udcb3"},{suit:"heart",value:4,color:"red",unicode:"\ud83c\udcb4"},{suit:"heart",value:5,color:"red",unicode:"\ud83c\udcb5"},{suit:"heart",value:6,color:"red",unicode:"\ud83c\udcb6"},{suit:"heart",value:7,color:"red",unicode:"\ud83c\udcb7"},{suit:"heart",value:8,color:"red",unicode:"\ud83c\udcb8"},{suit:"heart",value:9,color:"red",unicode:"\ud83c\udcb9"},{suit:"heart",value:10,color:"red",unicode:"\ud83c\udcba"},{suit:"heart",value:11,color:"red",unicode:"\ud83c\udcbb"},{suit:"heart",value:12,color:"red",unicode:"\ud83c\udcbd"},{suit:"heart",value:13,color:"red",unicode:"\ud83c\udcbe"}],h=t(7),C=t.n(h),k=function(){function e(){Object(u.a)(this,e),this.deck=null,this.tableaus=[],this.foundations=[],this.showCardPile=null}return Object(l.a)(e,[{key:"addShuffledPile",value:function(e){this.deck=e}},{key:"drawCard",value:function(){return this.deck.drawCard()}},{key:"setShowCardPile",value:function(e){this.showCardPile=e}},{key:"reloadDeck",value:function(){if(!this.showCardPile.isEmpty())return this.deck.addCard(this.showCardPile.drawCard()),this.reloadDeck()}},{key:"changeCard",value:function(){if(this.deck.isEmpty())return this.reloadDeck();this.showCardPile.addCard(this.drawCard())}},{key:"addTableau",value:function(e){this.tableaus.push(e)}},{key:"getTopMostCard",value:function(){return this.showCardPile.getLastCard()}},{key:"addFoundation",value:function(e){this.foundations.push(e)}},{key:"addCardToReservedPile",value:function(e,a){return console.log("did it come to add card to reservedPile pile......"),(a=a.split("_")).includes("showCard")?this.addCardToReservedPileFromWaste(e):a.includes("tableau")?this.addCardToFoundationFromTableau(e,a[1],a[2]):void 0}},{key:"addCardToStackPile",value:function(e,a){return(a=a.split("_")).includes("showCard")?(console.log("did it come to add card to stack pile......"),this.addCardToStackPileFromWaste(e)):a.includes("foundation")?this.addCardToStackPileFromFoundation(e,a[1]):this.addCardToTableauFromTableau(e,a[1],a[2])}},{key:"addCardToStackPileFromWaste",value:function(e){var a=this.tableaus[e],t=this.showCardPile,r=a.isAddableToStackPile(t.getLastCardValue()),o=a.isAlternateColor(t.getLastCardColor());return r&&o&&a.addCard(t.drawCard()),r&&o}},{key:"addCardToReservedPileFromWaste",value:function(e){var a=this.foundations[e],t=this.showCardPile,r=a.isAddableToReservedPile(t.getLastCardValue()),o=a.isSameSuit(t.getLastCardSuit());return r&&o&&a.addCard(t.drawCard()),r&&o}},{key:"addCardToStackPileFromFoundation",value:function(e,a){var t=this.tableaus[e],r=this.foundations[a],o=t.isAddableToStackPile(r.getLastCardValue()),d=t.isAlternateColor(r.getLastCardColor());return o&&d&&t.addCard(r.drawCard()),o&&d}},{key:"addCardToFoundationFromTableau",value:function(e,a,t){if(t>1)return!1;var r=this.foundations[e],o=this.tableaus[a],d=r.isAddableToReservedPile(o.getLastCardValue()),i=r.isSameSuit(o.getLastCardSuit());return d&&i&&r.addCard(o.drawCard()),d&&i}},{key:"addCardToTableauFromTableau",value:function(e,a,t){var r=this.tableaus[e],o=this.tableaus[a],d=r.isAddableToStackPile(o.getCardValue(t)),i=r.isAlternateColor(o.getCardColor(t));return d&&i&&r.addCards(o.drawCards(t)),d&&i}},{key:"isDraggable",value:function(e){return e.isDraggable()}},{key:"moveToPossiblePile",value:function(e,a){var t=this;if("showCard"===e){var r=this.foundations.some(function(e,a){return t.addCardToReservedPileFromWaste(a)});return r=r||this.stackPiles.some(function(e,a){return t.addCardToStackPileFromWaste(a)})}var o=this.foundations.some(function(r,o){return t.addCardToFoundationFromTableau(o,e,a)});return o=o||this.stackPiles.some(function(r,o){return t.addCardToTableauFromTableau(o,e,a)})}}]),e}(),f=function(){function e(){Object(u.a)(this,e),this.cards=[]}return Object(l.a)(e,[{key:"addCard",value:function(e){this.cards.push(e)}},{key:"addCards",value:function(e){var a=this;e.forEach(function(e){return a.addCard(e)})}},{key:"getLastCard",value:function(){return this.cards[this.cards.length-1]}},{key:"getCard",value:function(e){return this.cards[this.cards.length-+e]}},{key:"getCardValue",value:function(e){return this.getCard(e)?this.getCard(e).value:0}},{key:"getCardColor",value:function(e){return this.getCard(e).color}},{key:"getLastCardValue",value:function(){return this.getLastCard()?+this.getLastCard().value:0}},{key:"getLastCardColor",value:function(){return this.getLastCard().color}},{key:"getLastCardSuit",value:function(){return this.getLastCard().suit}},{key:"drawCard",value:function(){return this.cards.pop()}},{key:"drawCards",value:function(e){var a=this,t=new Array(e).fill(1);return(t=t.map(function(e){return a.drawCard()})).reverse(),t}},{key:"isDraggable",value:function(){return this.cards.length>0}},{key:"blockLastCard",value:function(){this.getLastCard().blockCard()}},{key:"revealLastCard",value:function(){this.getLastCard().revealCard()}},{key:"isAddableToStackPile",value:function(e){return 0===this.getLastCardValue()?13===e:+this.getLastCardValue()===+e+1}},{key:"isAddableToReservedPile",value:function(e){return console.log(this.getLastCardValue(),"this is last value of the card","value is",+e-1),this.getLastCardValue()===+e-1}},{key:"isAlternateColor",value:function(e){return!this.getLastCard()||this.getLastCardColor()!==e}},{key:"isSameSuit",value:function(e){return!this.getLastCard()||this.getLastCardSuit()===e}},{key:"isEmpty",value:function(){return 0===this.cards.length}},{key:"getAllCards",value:function(){return this.cards}}]),e}(),g=function(){function e(a){var t=a.suit,r=a.color,o=a.value,d=a.unicode;Object(u.a)(this,e),this.suit=t,this.color=r,this.value=o,this.unicode=d,this.isBlockedCard=!1,this.actualUnicode=d,this.actualColor=r}return Object(l.a)(e,[{key:"getUnicode",value:function(){return this.unicode}},{key:"blockCard",value:function(){this.isBlockedCard=!0,this.unicode="\ud83c\udca0",this.color="black"}},{key:"revealCard",value:function(){this.isBlockedCard=!1,this.unicode=this.actualUnicode,this.color=this.actualColor}},{key:"isBlocked",value:function(){return this.isBlockedCard}}]),e}(),b=new g({unicode:"\ud83c\udca0"}),m=new g({unicode:"\ud83c\udcdf"}),y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(n.a)(this,Object(s.a)(a).call(this,e))).pile=new f,t.state={game:t.startGame()},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"startGame",value:function(){var e=new k;return e.addShuffledPile(this.initializePile()),this.setFoundations(e),this.setTableaus(e),e.setShowCardPile(new f),e}},{key:"initializePile",value:function(){var e=new f;return C.a.shuffle(v).forEach(function(a){e.addCard(new g(a))}),e}},{key:"setTableaus",value:function(e){for(var a=0;a<=7;a++){for(var t=new f,r=0;r<=a;r++)t.addCard(e.drawCard()),t.blockLastCard();t.revealLastCard(),e.addTableau(t)}}},{key:"setFoundations",value:function(e){for(var a=0;a<4;a++)e.addFoundation(new f)}},{key:"updateDeck",value:function(){this.setState(function(e){var a=e.game;return a.changeCard(),{game:a}})}},{key:"allowDrop",value:function(e){e.preventDefault()}},{key:"drag",value:function(e){e.dataTransfer.setData("id",e.target.id)}},{key:"dropInFoundation",value:function(e,a){a.preventDefault();var t=a.dataTransfer.getData("id");this.setState(function(a){var r=a.game;return r.addCardToReservedPile(e,t),{game:r}})}},{key:"showAllTableauCards",value:function(e,a){var t=this,r=e.cards.length;return 0===r?o.a.createElement("div",null,m.getUnicode()):e.cards.map(function(e,d){return d+1===r&&e.revealCard(),e.isBlocked()?o.a.createElement("div",{style:t.getColor(e),draggable:"false"},e.getUnicode()):o.a.createElement("div",{className:"card",id:"tableau_"+a+"_"+(r-d),draggable:"true",onDragStart:t.drag,style:t.getColor(e)},e.getUnicode())})}},{key:"getAllTableauCards",value:function(){var e=this;return this.state.game.tableaus.map(function(a,t){return o.a.createElement("div",{className:"card",id:"tableau_"+t,onDrop:e.dropInTableau.bind(e,t),onDragOver:e.allowDrop},e.showAllTableauCards(a,t))})}},{key:"getAllFoundationCards",value:function(){var e=this;return this.state.game.foundations.map(function(a,t){var r=a.getLastCard();return r||(r=m),o.a.createElement("div",{id:"foundation_"+t,className:"card",draggable:"true",onDragStart:e.drag,onDrop:e.dropInFoundation.bind(e,t),onDragOver:e.allowDrop,style:e.getColor(r)},r.getUnicode())})}},{key:"getColor",value:function(e){return{color:e.color}}},{key:"showTopCard",value:function(){var e=this.state.game.getTopMostCard();return e||(e=m),o.a.createElement("div",{id:"showCard",className:"card",style:this.getColor(e),draggable:this.state.game.showCardPile.isDraggable(),onDragStart:this.drag},e.getUnicode())}},{key:"dropInTableau",value:function(e,a){a.preventDefault();var t=a.dataTransfer.getData("id");this.setState(function(a){var r=a.game;return r.addCardToStackPile(e,t),{game:r}})}},{key:"allCards",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"stock"},o.a.createElement("div",{onClick:this.updateDeck.bind(this),className:"card"},b.getUnicode()),o.a.createElement("div",{id:"wasteCard",onDragStart:this.drag,onDragOver:this.allowDrop,draggable:"true",className:"card"},this.showTopCard()),this.getAllFoundationCards())),o.a.createElement("div",{className:"deck"},this.getAllTableauCards()))}},{key:"render",value:function(){return o.a.createElement("div",{className:"main"},this.allCards())}}]),a}(o.a.Component);t(16);i.a.render(o.a.createElement("div",null,o.a.createElement(y,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0eb9addf.chunk.js.map