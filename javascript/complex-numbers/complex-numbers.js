export class ComplexNumber {
  constructor(r, i) {
    this.r = r;
    this.i = i;
  }

  get real() {
    return this.r
  }

  get imag() {
    return this.i
  }

  add(numbers) {
    return new ComplexNumber(this.r + numbers.r, this.i + numbers.i)
  }

  sub(numbers) {
    return new ComplexNumber(this.r - numbers.r, this.i - numbers.i)
  }

  div(numbers) {
    const denominador = numbers.r ** 2 + numbers.i ** 2;

    const real = (this.r * numbers.r + this.i * numbers.i) / denominador;
    const imag = (this.i * numbers.r - this.r * numbers.i) / denominador;
    return new ComplexNumber(real, imag);
  }

  mul(numbers) {
    return new ComplexNumber( this.r * numbers.r - this.i * numbers.i, this.r * numbers.i + this.i * numbers.r);
  }

  get abs() {
    return Math.sqrt(this.r ** 2 + this.i ** 2);
  }

  get conj() {
    return new ComplexNumber(this.r, this.i !== 0 ? -this.i : 0);
  }

  get exp() {
    return new ComplexNumber(Math.E ** this.r * Math.cos(this.i), Math.sin(this.i));
  }
}
