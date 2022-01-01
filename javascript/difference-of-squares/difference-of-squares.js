
export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    let square = 0;
    for(let i = 1; i <= this.num; i++){
      square += i**2;
    }
   return square;
  }

  get squareOfSum() {
    let sum = 0;
    for(let i = 1; i <= this.num; i++){
      sum += i;
    }
    return sum ** 2;


  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
