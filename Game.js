const {Card, Deck} = require('./Deck.js');


class  TexasHoldEm {
    constructor() {
        this.deck = new Deck();
        this.player[ 
            {cards: [], chips: startChips, bet:0, fold: false}
        ];
        this.board =[]; 
        this.pot = 0; 
    }
   
   
   
   
    deal(){ 
        for(player of this.playersCards.length){ 
            for(let i = 0; i < 2; i++){ 
                this.playersCards[player].push(this.deck.deal()); 
            }
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
}