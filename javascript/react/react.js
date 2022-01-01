export class InputCell {
  constructor(value) {
      this.subscribers = [];
      this.value = value;
  }

  setValue(value) {
      this.value = value;
      this.subscribers.forEach(sub => sub());
  }
}

export class ComputeCell {
    constructor(inputCells, fn) {
        this.subscribers = [];
        this.callbackArray = [];

        this.fn = () => fn(inputCells);
        this.newValue = this.fn();

        inputCells.forEach(cell => 
            cell.subscribers.push(() => {
                if (this.newValue != this.value) {
                    this.subscribers.forEach(sub => sub());
                    this.callbackArray.forEach(cbb => cbb.notify(this));
                }
            })
        )
    }

    get value() {
        this.newValue = this.fn();
        return this.newValue;
    }

    addCallback(cb) {
        this.callbackArray.push(cb);
    }

    removeCallback(cb) {
        this.callbackArray = this.callbackArray.filter(index => index != cb);
    }
}
export class CallbackCell {
    constructor(fn) {
        this.values = [];
        this.notify = c => this.values.push(fn(c));
    }
}