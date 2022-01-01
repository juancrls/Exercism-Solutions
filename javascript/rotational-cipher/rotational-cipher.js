export class RotationalCipher {
  static rotate(str, n) {
    let result = '';

    for(let i = 0; i < str.length; i++){
      let letters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
      /[A-Z]/g.test(str.charAt(i)) ? letters = letters.toUpperCase() : null; // case insensitive
      if(letters.charAt(letters.indexOf(str.charAt(i))) == ''){
        result += str.charAt(i);
      } else result += letters.charAt(letters.indexOf(str.charAt(i)) + n);  // pontuactions and numbers
    }
    return result;
  }
}
