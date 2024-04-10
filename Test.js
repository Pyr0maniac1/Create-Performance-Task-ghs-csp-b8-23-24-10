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






class  TexasHoldEm {
    constructor() {
        this.deck = new Deck();
        this.player[ 
            {Cards: [], chips: startChips, bet:0, fold: false}
        ];
        this.board =[]; 
        this.pot = 0; 
        this.stages = [
            {name: 'Hand', actions: () => this.deal()},
            {name: 'Flop', actions: () => this.dealRiv(3)},
            {name: 'Turn', actions: () => this.dealRiv(1)},
            {name: 'River', actions: () => this.dealRiv(1)}
        ];  
    }
    startGame() {
        this.deck.shuffle();
        this.stages.orEach(stage => {
            //output
            stage.action();
            //betting round 
        });
        this.showHand(); 
        this.gameLogic(); // send to Logic.js
        this.reset();   
    } 
    deal(){ 
        for(player of this.playersCards.length){ 
            for(let i = 0; i < 2; i++){ 
                this.playersCards[player].push(this.deck.deal()); 
            }
        }
    }
    dealRiv(num) {
        this.deck.deal(); // burn one card 

        for (let i = 0; i < num; i++) {
            this.board.push(this.deck.deal());
        }
    }

    
    bettingRound() {
        this.players.forEach((player, index) => {
            if (!player.fold) {
                const betAmount = this.promptPlayerBet(index);
                if (betAmount > player.chips) {
                    // console.log(`Player ${index + 1} does not have enough chips and is all-in!`)
                    player.bet = player.chips;
                    player.chips = 0;
                } else {
                    player.chips -= betAmount;
                    player.bet += betAmount;
                }
            this.pot += player.bet;
            }
        });
        // Handle call or raise situations
        if (this.players[0].bet !== this.players[1].bet) {
            // Assuming player 1 raised, so player 2 must call, raise, or fold
            let additionalBet = this.players[0].bet - this.players[1].bet;
            // ADD OPTION TO RAISE OR FOLD
            if (additionalBet > 0) {
                // Player 2 decides to call
                this.players[1].chips -= additionalBet;
                this.players[1].bet += additionalBet;
                this.pot += additionalBet;
            }
        }
    }
}; 




    class Logic {
        constructor(points, checkedPlayer) {
        // points value 
        this.points = points
        this.checkedPlayer = checkedPlayer
        }
        //sort 
        sort() {
        this.board = board.cards.value.sort()
        this.player[x].cards = player[x].cards.value.sort()
        console.log(this.board)
        };
        // straight flush 
        straightFlush() {
        
        }
        // four of a kind 
        // full house 
        // flush  
        // straight 
        // three of a kind 
        // two pair 
        // one pair 
        // high card
        highCard(player, checkedPlayer) {
        return player[checkedPlayer].board.cards[0].value
        }
    
        check() { 
        this.sort()
        
        };
    };
    