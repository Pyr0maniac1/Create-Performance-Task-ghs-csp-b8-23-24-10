class Card { 
    constructor(value, suit){ 
        this.value = value;
        this.suit = suit;
    }
    getCardsString(){
        return `${this.value} of ${this.suit}`;
    
    }
}
    class Deck {
        constructor(){
            this.Cards = [];  
            this.reset(); 
            this.shuffle(); 
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

    shuffle(){
        var i = this.Cards.length; 
        while(i != 0){ 
            var j = Math.floor(Math.random() * i);
            i--; 
            [this.Cards[i], this.Cards[j]] = [this.Cards[j], this.Cards[i]];  
        }
    };
    
    deal(){
    return this.Cards.pop();
    }
}




