
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
    