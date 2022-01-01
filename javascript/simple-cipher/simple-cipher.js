//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher { // abcdefghijklmnopqrstuvwxyz
  constructor(key){
     if(!key){
      var letters = 'abcdefghijklmnopqrstuvwxyz';
      var key = '';
      do{
        key += letters[(Math.floor(Math.random() * 25))]
      }while(key.length != 100);
      
     }
      this.key = key
  }

  encode(str) {
  var letters = 'abcdefghijklmnopqrstuvwxyz' 
  for(let i = 0; i < str.length; i++){
    var character = letters.search(str.charAt(i)); 
      if(this.key.length != str.length){this.key += this.key} 
    var keyNumber = letters.search(this.key.charAt(i));
      if(character + keyNumber >= letters.length - 1){letters += letters}
    var newCharacter = letters.charAt(character + keyNumber)
    str = str.split('');
    str[i] = newCharacter;
    str = str.join('');   
  }
    return str;
  }

  decode(str) {
    str = str.split('');
    var result = ''

    for(let i = 0; i < str.length; i++){
      var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
      do{if(this.key.length < str.length){this.key += this.key}}while(this.key.length < str.length);
      
      var splitedKey = this.key.split('');
      var char = letters.indexOf(str[i]) - letters.indexOf(splitedKey[i]);
      char >= 0 ? result += letters[char] : result += letters.splice(char)[0];
    }
    return result     
  }
}
