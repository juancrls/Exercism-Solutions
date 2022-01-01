export class List {
  constructor(content = []) {
    this.content = content
  }

  compare(other) {
    this.content = this.content.toString();
    other = Object.values(other)[0].toString();

    return this.content === other ? 'EQUAL' : other.includes(this.content) ? 'SUBLIST' : this.content.includes(other) ? 'SUPERLIST' : 'UNEQUAL'
  }
}
