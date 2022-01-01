String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

export class Board {
  constructor(board) {
    this.board = board;
    this.newBoard = [...this.board];
  }

  winner() {
    // RECURSIVE SOLUTION
    const search = (start, target) => {
      let [y, x] = start;
      // BASE
      if(target == 'X') {
        if(!this.board[y][x + 1]) {
          this.board[y] = this.board[y].replaceAt(x, ' ');
          return true;
        }
      } else if(target == 'O') {
        if(!this.board[y + 1]) {
          this.board[y] = this.board[y].replaceAt(x, ' ');
          return true;
        }
      }
      // RECURSIVE
      if(this.board[y][x + 2] == target) {
        this.board[y][x - 2] == target ? this.board[y] = this.board[y].replaceAt(x - 2, ' ') : null;
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y, x + 2], target)
      } else if(this.board[y][x - 2] == target) { 
        this.board[y][x + 2] == target ? this.board[y] = this.board[y].replaceAt(x + 2, ' ') : null;
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y, x - 2], target)
      } else if(this.board[y - 1] && this.board[y - 1][x - 1] == target) {
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y - 1, x - 1], target)
      } else if(this.board[y - 1] && this.board[y - 1][x + 1] == target) {
        this.board[y][x + 1] == target ? this.board[y - 1] = this.board[y - 1].replaceAt(x - 1, ' ') : null;
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y - 1, x + 1], target)
      } else if(this.board[y + 1] && this.board[y + 1][x - 1] == target) {
        this.board[y + 1][x + 1] == target ? this.board[y + 1] = this.board[y + 1].replaceAt(x + 1, ' ') : null;
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y + 1, x - 1], target)
      } else if(this.board[y + 1] && this.board[y + 1][x + 1] == target) {
        this.board[y + 1][x - 1] == target ? this.board[y + 1] = this.board[y + 1].replaceAt(x - 1, ' ') : null; // if left path is true, delete right path
        this.board[y] = this.board[y].replaceAt(x, ' ');
        
        return search([y + 1, x + 1], target)
      }
    }
    // FOR STARTING POINT
    for(let i = 0; i < this.board.length; i++){
      if(this.board[i][i] == 'X') {
        this.board = this.board.map(x => x.replace(/O/g, '.'));
        if(search([i, i], 'X')) {
          return 'X'
        }
      }
    }
    this.board = this.newBoard;
    for(let i = 0; i < this.board.length; i+= 2){
      if(this.board[0][i] == 'O') {
        this.board = this.board.map(x => x.replace(/X/g, '.'));
        if(search([i, i], 'O')) {
          return 'O'
        }
      }
    }
    return ''
  }
}