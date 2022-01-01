const gcd = (a, b) => { // euclidean algorithm
  a = Math.abs(a);
  b = Math.abs(b);
  let result = [b, a % b];
  if(result[1] == 0) return result[0];
  return gcd(result[0], result[1]);
}

export class Rational {
  constructor(x, y) {
    if (y < 0) {
      y *= -1;
      x *= -1;
    }
    if (x == 0) {
      y = 1;
    }
    
    this.x = x / gcd(x, y);
    this.y = y / gcd(x, y);
  }
  add(newRational) {
    let [a, b] = [this.x, this.y];
    let [c, d] = [newRational.x, newRational.y];
    let x = a * d + b * c;
    let y = b * d;
    return new Rational(x, y);
  }
  sub(newRational) {
    let [a, b] = [this.x, this.y];
    let [c, d] = [newRational.x, newRational.y];
    let x = a * d - b * c;
    let y = b * d;
    return new Rational(x, y);
  }
  mul(newRational) {
    let [a, b] = [this.x, this.y];
    let [c, d] = [newRational.x, newRational.y];
    let x = a * c;
    let y = b * d;
    return new Rational(x, y);
  }
  div(newRational) {
    let [a, b] = [this.x, this.y];
    let [c, d] = [newRational.x, newRational.y];
    let x = a * d;
    let y = b * c;
    return new Rational(x, y);
  }
  abs() {
    return new Rational(Math.abs(this.x), this.y);
  }
  exprational(newRational) {
    if (newRational > 0) {
      return new Rational(this.x**newRational, this.y**newRational);
    } else {
      let absnewRational = Math.abs(newRational);
      return new Rational(this.y**absnewRational, this.x**absnewRational);
    }
  }
  expreal(power) {
    let num = Math.pow(power, 1 / this.y);
    return Math.pow(num, this.x);
  }
  reduce() {
    return this;
  }
}