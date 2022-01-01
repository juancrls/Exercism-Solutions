export class Crypto {
  constructor(s) {
    this.s = s;
  }

  normalizePlaintext() {
    return this.s.match(/[a-zA-Z\d]/g).join('').toLowerCase();
  }

  size() {
    var ns = this.s.match(/[a-zA-Z\d]/g).join('').toLowerCase();
    return Math.ceil(Math.sqrt(ns.length));
  }

  plaintextSegments() {
    var ns = this.s.match(/[a-zA-Z\d]/g);

    var n = Math.ceil(Math.sqrt(ns.length)); // size 
    
    for(let i = 1; i < ns.length; i++){ 
        i % n == 0 ? ns[i] = ' ' + ns[i] : null; // plain text segments part 1
    }
    
    ns = ns.join('').toLowerCase().split(' '); // plain text segments part 2 // ['timeis', 'anillu', 'sionlu', 'nchtim', 'edoubl', 'yso']
    
    return ns
  }

  ciphertext() {
    var ns = this.s.match(/[a-zA-Z\d]/g);

    var n = Math.ceil(Math.sqrt(ns.length)); // size 
    
    for(let i = 1; i < ns.length; i++){ 
        i % n == 0 ? ns[i] = ' ' + ns[i] : null; // plain text segments part 1
    }
    
    ns = ns.join('').toLowerCase().split(' '); // plain text segments part 2 // ['timeis', 'anillu', 'sionlu', 'nchtim', 'edoubl', 'yso']
  
    var result = '';

    for(let i = 0; i < ns.length; i++){
      for(let j = 0; j < ns.length; j++){
        result += ns[j][i];
      }
    }
    return result.split('undefined').join('');
  }
}
