class CircularBuffer {
  constructor(len) {
    this.len = len;
    this.array = [];
  }

  write(num) {
    if(this.array.length > this.len - 1){
      throw new BufferFullError();
    }
    this.array.push(num);
  }

  read() {
    if(this.array.length == 0){
      throw new BufferEmptyError();
    }
    return this.array.shift();
  }

  forceWrite(num) { // overwrite
    if(this.array.length > this.len - 1) {
      this.array.shift();
    }
    this.array.push(num);
  }

  clear() {
    this.array = [];
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}
