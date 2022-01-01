export class Bowling {
  constructor(){
      this.spare = false;
      this.total = 0;
      this.strikeBonusRounds = [];
      this.frames = [[[], 0]];
      this.rolls = 0;
      this.maxRolls = 20;
  }

  roll(point) {
    this.rolls++
    
    if(point > 10) throw new Error('Pin count exceeds pins on the lane');
    if(point < 0) throw new Error('Negative roll is invalid');

    this.strikeBonusRounds.forEach(arr => { // saves the next 2 rolls as bonus a for the strike
      if(arr.length < 2 && this.frames.length < 10) {
        arr.push(point)
      }

      if(this.frames.length == 10 && this.frames[this.frames.length - 1][0][1]){
        arr.push(this.frames[this.frames.length - 1][0][1])
      }
    })

    if(this.strikeBonusRounds[0] && this.strikeBonusRounds[0].length == 2){
      this.frames[this.frames.length - 2][1] += (this.strikeBonusRounds[0][0] + this.strikeBonusRounds[0][1]); // adds the bonus into the total
      this.strikeBonusRounds.shift(); // delete the first bonus
    }

    if(this.frames[this.frames.length - 1][0].length == 2 && this.frames.length !== 10){ // will create a new frame, except on the last one
      this.frames.push([[], 0]); // [[roll1, roll2], total]
    }

    if(this.frames.length == 10 && point !== 10){ // if the last rolls exist and the first roll isn't a strike
      if(this.frames[this.frames.length - 1][0].length == 2){ // check if there'snt already two numbers
        if(this.frames[this.frames.length - 1][1] == 10 || this.frames[this.frames.length - 1][0][0] == 10){
          this.frames[this.frames.length - 1][0].push(point);
        }
      }

      if(this.frames[this.frames.length - 1][0].length < 2){
        this.frames[this.frames.length - 1][0].push(point);
      }
    }

    if(point == 10){ // will add a 0 for frames with strikes [10, 0]
      if(this.frames.length !== 10) this.strikeBonusRounds.push([]); // .. except if the point is from the last frame
      if(this.frames.length == 10){
        this.frames[this.frames.length - 1][0].push(point);    
      } else {
        this.frames[this.frames.length - 1][0].push(point);
        this.frames[this.frames.length - 1][0].push(0); // strike frames have only one roll
        this.rolls++
      }
    } else if(this.frames[this.frames.length - 1][0].length !== 2 && this.frames.length !== 10){ // normal addition to the frame
      this.frames[this.frames.length - 1][0].push(point);
    }

    if(this.frames[this.frames.length - 1][0].length >= 2){ // if the frame is complete
      this.frames[this.frames.length - 1][1] = this.frames[this.frames.length - 1][0].reduce((acc, cur) => acc += cur) // add the frame total

      if(this.frames[this.frames.length - 1][0][0] + this.frames[this.frames.length - 1][0][1] > 10 && this.frames.length < 10){ // if isn't last frame and the sum is greater than 10
        throw new Error('Pin count exceeds pins on the lane'); 
      }

      if(this.frames.length == 10 && this.frames[this.frames.length - 1][0][1] + this.frames[this.frames.length - 1][0][2] > 10){ // if the last two rolls sum are greatest than 10
        if(this.frames[this.frames.length - 1][0][1] !== 10 && this.frames[this.frames.length - 1][0][2] !== 10){
          throw new Error('Pin count exceeds pins on the lane'); 
        }

        if(!this.spare && this.frames[this.frames.length - 1][0][1] !== 10 && this.frames[this.frames.length - 1][0][2] == 10){
          throw new Error('Pin count exceeds pins on the lane'); 
        }
      }

      if(this.spare && this.frames.length !== 10){ // spare bonus doesn't count for strikes
        this.frames[this.frames.length - 2][1] += this.frames[this.frames.length - 1][0][0]; // add spare bonus
        this.spare = false;
      }

      if(this.frames[this.frames.length - 1][0][0] + this.frames[this.frames.length - 1][0][1] == 10 && this.frames[this.frames.length - 1][0][0] !== 10){ // check if is a spare
        this.spare = true;
      }

      if(this.frames.length == 10 && this.frames[this.frames.length - 1][0][0] == 10 || this.frames.length == 10 && this.frames[this.frames.length - 1][0][0] + this.frames[this.frames.length - 1][0][1] == 10) this.maxRolls = 21; // if there's a spare or a strike on the final frame, update maxRows
      if(this.rolls > this.maxRolls) throw new Error('Cannot roll after game is over');
    }
  }

  score() {
    if(this.rolls !== this.maxRolls) throw new Error('Score cannot be taken until the end of the game');
    
    this.frames.forEach(frame => {
      this.total += frame[1]
    })
    return this.total
  }
}