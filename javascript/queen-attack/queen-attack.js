export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
      this.black = [blackRow, blackColumn];
      this.white = [whiteRow, whiteColumn];
      
      for(let arr in this){
        const found = this[arr].find(element => element > 7 || element < 0);
        if(found) throw new Error('Queen must be placed on the board');
      }

      if(JSON.stringify(this.black) == JSON.stringify(this.white)) throw new Error('Queens cannot share the same space');
  }

  toString() {
    let board = [...Array(8)].map(col => [...Array(8)].map(row => '_'));
    board[this.black[0]][this.black[1]] = 'B';
    board[this.white[0]][this.white[1]] = 'W';

    board = board.map(arr => arr.join(' ')).join('\n');
    return board;
  }

  get canAttack() {
    const rows = [this.black[0], this.white[0]];
    const columns = [this.black[1], this.white[1]];

    if(rows[0] == rows[1] || columns[0] == columns[1]){
      return true;
    } 
    
    rows == rows.sort();
    columns == columns.sort();

    if(rows[1] - rows[0] == columns[1] - columns[0]){
      return true;
    } else {
      return false;
    }
  }
}