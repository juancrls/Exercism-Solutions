export class BankAccount {
  constructor(account) {
    this.account = account;
    this.isOpen = false;
  }

  open() {
    if(this.isOpen){
      throw new ValueError;
    }
    this.account = 0
    this.isOpen = true;
    return this.account;
  }

  close() {
    if(!this.isOpen){
      throw new ValueError;
    }
    this.isOpen = false;
  }

  deposit(value) {
    this.account += value;
    if(value < 0 || !this.isOpen){
      throw new ValueError;
    }
    return this.account
  }

  withdraw(value) {

    if(!this.isOpen || value < 0 || value > this.account){
      throw new ValueError;
    }

    this.account -= value;
    return this.account
  }

  get balance() {
    if(!this.isOpen){
      throw new ValueError;
    }
    return this.account;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
