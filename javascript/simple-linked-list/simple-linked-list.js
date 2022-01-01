//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(_value, _next) {
    this._value = _value;
    this._next = _next || null;
  }

  get value() {
    return this._value
  }

  get next() {
    return this._next
  }
}

export class List {
  constructor(arr=[]) {
    this._head = null;
    this.size = 0;

    if(arr.length > 0){
      arr.forEach(x => {
        this.add(new Element(x))
      })
    }
  }

  add(nextValue) {

    let cur = this._head
    this._head = nextValue
    this._head._next = cur
    this.size++
  }
  
  get length() {
    return this.size
  }
  
  get head() {
    // console.log(this)
    return this._head
  }

  toArray() {
    let array = []
    let cur = this.head
    while(cur){
      array.push(cur.value)
      cur = cur.next
    }
    return array
  }

  reverse() {
    return new List(this.toArray());
  }
}