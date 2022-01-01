const gcd = (x, y) => y ? gcd(y, x % y) : Math.abs(x);

export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    this.a = 0,
    this.b = 0,
    this.placeholder,
    this.aMax = buckOne,
    this.bMax = buckTwo,
    this.goal = goal,
    this.starterBuck = starterBuck,
    this.steps = 0
  }

  get bucket() {
    if(this.starterBuck == 'one') {
      this.a = this.aMax;
      this.steps++
    } else if(this.starterBuck == 'two') {
      this.placeholder = this.aMax
      this.aMax = this.bMax;
      this.bMax = this.placeholder
    }

    if(this.bMax == this.goal) {
      this.b = this.bMax;
      this.goalBucket = 'two';
      this.otherBucket = this.a;
      this.steps++
      return;
    }

    if(this.aMax == this.goal) {
      this.a = this.aMax;
      this.goalBucket = 'two';
      this.otherBucket = this.b;
      this.steps++
      return;
    }
    
    const transferWater = () => {
      if(this.a > 0 && this.b !== this.bMax) {
        while(this.b !== this.bMax){
          if(this.a == 0) break;
          this.b++;
          this.a--
        }
        this.steps++
      }

      if(this.b == this.goal) {
        this.goalBucket = 'two';
        this.otherBucket = this.a;
        return;
      }      

      if(this.a == this.goal) {
        if(this.placeholder) {
          this.goalBucket = 'two';
          this.otherBucket = this.b;
          return;
        }
        this.goalBucket = 'one';
        this.otherBucket = this.b;
        return;
      }


      if(this.a == 0) {
        this.a = this.aMax; 
        this.steps++
      }

      if(this.b == this.bMax) {
        this.b = 0;
        this.steps++
      } 

      if(this.b == this.bMax && this.a == 0) {
        throw new Error(`It's not possible to get this goal with these two buckets: ${this.aMax} & ${this.bMax}`);
      }
      return transferWater();
    }
    return transferWater();
  }

  moves() {
    if(this.goal % gcd(this.bMax, this.aMax) || this.goal > Math.max(this.bMax, this.aMax)) {
      throw new Error(`It's not possible to get this goal with these two buckets: ${this.aMax} & ${this.bMax}`);
    }
    this.bucket;
    return this.steps
  }
}