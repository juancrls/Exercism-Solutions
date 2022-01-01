export class DiffieHellman {
  constructor(p, g) {
    this.p = p; // 23
    this.g = g; // 5
    const prime = num => {
      if(num === 0) throw new Error('p must be greater than 0');
      for(let i = 2; i < num; i++){
        if(num % i === 0)throw new Error('p must be a prime number');
      return true
      }
    }
    prime(p);
  }

  getPublicKeyFromPrivateKey(privateKey) { 
    if(privateKey < 2 || privateKey == this.p || privateKey == this.p + 1) throw Error;
    return ((this.g**privateKey % this.p) + this.p) % this.p;
  }

  getSharedSecret(privateKey, publicKey) { 
    return ((publicKey**privateKey % this.p) + this.p) % this.p;
  }
}
