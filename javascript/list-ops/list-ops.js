export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(lists) {
    let newList = [];
    lists.values.forEach((list) => {
      newList = [...newList, ...list.values];
    });
    return new List([...this.values, ...newList]);
  }

  filter(func) {
    let newList = [];
    this.values.forEach((value) => {
      if (func(value)) {
        newList.push(value);
      }
    });
    return new List(newList);
  }

  map(func) {
    let newList = [];
    this.values.forEach((value) => {
      newList.push(func(value));
    });
    return new List(newList);
  }

  length() {
    let length = 0;
    this.values.forEach(() => length++);
    return length;
  }

  foldl(func, acc) {
    let newList = acc;
    this.values.forEach((value) => {
      newList = func(newList, value);
    });
    return newList;
  }

  foldr(func, acc) {
    let newList = acc;
    this.values.reverse().forEach((value) => {
      newList = func(newList, value);
    });
    return newList;
  }

  reverse() {
    let newList = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      newList.push(this.values[i]);
    }
    return new List(newList);
  }
}