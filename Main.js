class Card { 
    constructor(value, suit){ 
        this.value = value;
        this.suit = suit;
    }


}

class Deck {
    constructor(){
        this.Cards = [];  
        this.reset(); 
        this.shuffle(); 
    }
} 

reset(){ 
    const suits = ['♠', '♣', '♥', '♦']; 
    const values = ['2', '3', '4', '5', '6', '7 ', '8', '9', '10', 'J', 'Q', 'K', 'A']; 
    
    for(let suit of suits){ 
        for(let value of values){ 
            this.Cards.push(new Card(value, suit)); 
        }
    }
} 

