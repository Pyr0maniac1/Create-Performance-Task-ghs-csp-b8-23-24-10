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
            this.cards = [];  
            this.reset(); 
            this.shuffle(); 
        }


    reset(){ 
        const suits = ['♠', '♣', '♥', '♦']; 
        const values = ['2', '3', '4', '5', '6', '7 ', '8', '9', '10', 'J', 'Q', 'K', 'A']; 
        
        for(let suit of suits){ 
            for(let value of values){ 
                this.cards.push(new Card(value, suit)); 
            }
        }
    } 

    shuffle(){
        var i = this.cards.length; 
        while(i != 0){ 
            var j = Math.floor(Math.random() * i);
            i--; 
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];  
        }
    };
    
    deal(){
    return this.cards.pop();
    }
}




