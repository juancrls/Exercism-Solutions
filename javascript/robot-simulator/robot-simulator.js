//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this.positions = ['north', 'east', 'south', 'west'];
    this.actualPosition = 'north';
    this.coord = [0, 0];
  }

  get bearing() {
    return this.actualPosition
  }

  get coordinates() {
    return this.coord
  }

  place({ x, y, direction }) {
    if(!this.positions.includes(direction)){
      throw new InvalidInputError()
    }
    this.actualPosition = direction;
    this.coord[0] = x;
    this.coord[1] = y;
  }

  evaluate(instructions) {
    instructions = instructions
      .split('')
      .map(x => {
        if(x == 'R'){

          if(this.positions.indexOf(this.actualPosition) == this.positions.length - 1) {
            this.actualPosition = this.positions[0]
          } else {
            this.actualPosition = this.positions[this.positions.indexOf(this.actualPosition) + 1]
          }
          
        } else if(x == 'L'){

          if(this.positions.indexOf(this.actualPosition) == 0) {
            this.actualPosition = this.positions[this.positions.length - 1]
          } else {
            this.actualPosition = this.positions[this.positions.indexOf(this.actualPosition) - 1]
          }

        } else if(x == 'A'){
          if(this.actualPosition == 'north') this.coord[1]++;
          if(this.actualPosition == 'east') this.coord[0]++;
          if(this.actualPosition == 'south') this.coord[1]--;
          if(this.actualPosition == 'west') this.coord[0]--;
        }
      })
  }
}