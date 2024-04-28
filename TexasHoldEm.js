
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        return `${this.value} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.reset();
        this.shuffle();
    }

    reset() {
        const suits = ['♠', '♣', '♥', '♦'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach(suit => {
            values.forEach(value => {
                this.cards.push(new Card(value, suit));
            });
        });
    }

    shuffle() {
        let currentIndex = this.cards.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }

    deal() {
        return this.cards.pop();
    }
}

class TexasHoldEm {
    constructor(numPlayers) {
        this.deck = new Deck();
        this.players = Array.from({ length: numPlayers }, () => ({
            hand: [],
            chips: 100,
            bet: 0,
            fold: false,
            potentialWinnings: 0
        }));
        this.board = [];
        this.pot = 0;
        this.stages = ['Hand', 'Flop', 'Turn', 'River'];
    }

    start() {
        this.deck.shuffle();
        this.stages.forEach(stage => {
            this[stage.toLowerCase()]();
            this.bettingRound();
        });
        this.showHand();
        this.determineWinner();
        this.collectBets();
        this.reset();
    }

    hand() {
        this.players.forEach(player => {
            player.hand.push(this.deck.deal(), this.deck.deal());
        });
    }

    flop() {
        this.deck.deal();
        this.board.push(...Array.from({ length: 3 }, () => this.deck.deal()));
    }

    turn() {
        this.deck.deal();
        this.board.push(this.deck.deal());
    }

    river() {
        this.deck.deal();
        this.board.push(this.deck.deal());
    }

    bettingRound() {
        this.players.forEach(player => {
            if (!player.fold) {
                let betAmount = Math.min(10, player.chips); // Simplified betting logic
                player.chips -= betAmount;
                player.bet += betAmount;
                this.pot += betAmount;
            }
        });
    }

    showHand() {
        console.log("Players' Hands:");
        this.players.forEach((player, index) => {
            console.log(`Player ${index + 1}: ${player.hand.map(card => card.toString()).join(', ')}`);
        });
        console.log("Board Cards:");
        console.log(this.board.map(card => card.toString()).join(', '));
    }

    determineWinner() {
        console.log("Player 1 wins!");
        this.players[0].chips += this.pot;
        this.pot = 0;
    }

    collectBets() {
        let activePlayers = this.players.filter(p => !p.fold);
        let allInPlayers = activePlayers.filter(p => p.chips === 0);

        allInPlayers.forEach(allInPlayer => {
            let allInBet = allInPlayer.bet;
            let sidePot = 0;

            activePlayers.forEach(player => {
                if (player.bet >= allInBet) {
                    sidePot += allInBet;
                    player.bet -= allInBet;
                } else {
                    sidePot += player.bet;
                    player.bet = 0;
                }
            });

            allInPlayer.potentialWinnings = (allInPlayer.potentialWinnings || 0) + sidePot;
        });

        this.pot += activePlayers.reduce((acc, player) => {
            let addition = player.bet;
            player.bet = 0;
            return acc + addition;
        }, 0);

        console.log(`Main pot is now at ${this.pot}. Side pots have been managed for all-in players.`);
    }

    reset() {
        this.players.forEach(player => {
            player.hand = [];
            player.bet = 0;
            player.fold = false;
        });
        this.board = [];
        this.deck.reset();
        this.deck.shuffle();
    }
}
