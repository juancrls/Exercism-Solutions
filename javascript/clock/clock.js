export class Clock {
  constructor(hour, min=0) {
    this.hour = hour;
    this.min = min
  }

  toString() {
    while(this.min < 0){
      this.min += 60;
      this.hour -= 1
    }

    while(this.hour < 0) this.hour += 24;

    while(this.min >= 60){
      this.min -= 60;
      this.hour += 1
    }
    
    while(this.hour >= 24) this.hour -= 24;

    this.hour = String(this.hour).padStart(2, '0');
    this.min = String(this.min).padStart(2, '0');
    
    return `${this.hour}:${this.min}`
  }
  
  plus(num=0) {
    this.min += num
    return new Clock(this.hour, this.min)
  }

  minus(num=0) {
    this.min -= num
    return new Clock(this.hour, this.min)
  }

  equals(clock) {
    return this.toString() == clock.toString()
  }
}
