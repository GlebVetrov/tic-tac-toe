class TicTacToe {
    constructor() {
        this.sign = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.sign;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.sign;
            this.sign = this.sign === 'x' ? 'o' : 'x';
            this.getWinner();
        }
    }

    isFinished() {
        return !!(this.winner || this.noMoreTurns());
    }

    getWinner() {
        if (!this.winner) {
            for(let i = 0; i < this.field.length; i++) {
               if(this.field[i].every( cell => cell === 'x')) {
                   return this.winner = 'x';
               }

               if(this.field[i].every( cell => cell === 'o')) {
                   return this.winner = 'o';
               }
            }

            if (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x' ) {
                return this.winner = 'x';
            }

            if (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x' ) {
                return this.winner = 'x';
            }

            if (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x' ) {
                return this.winner = 'x';
            }

            if (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === 'o' ) {
                return this.winner = 'o';
            }

            if (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === 'o' ) {
                return this.winner = 'o';
            }

            if (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === 'o' ) {
                return this.winner = 'o';
            }

            if (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x' ) {
                return this.winner = 'x';
            }

            if (this.field[0][2] === 'x' && this.field[1][1] === 'x' && this.field[2][0] === 'x' ) {
                return this.winner = 'x';
            }

            if (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === 'o' ) {
                return this.winner = 'o';
            }

            if (this.field[0][2] === 'o' && this.field[1][1] === 'o' && this.field[2][0] === 'o' ) {
                return this.winner = 'o';
            }

        }
        return this.winner;
    }

    noMoreTurns() {
        return !this.field.some(row => row.some(cell => cell === null));
    }

    isDraw() {
        return !!(this.winner === null && this.noMoreTurns());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
