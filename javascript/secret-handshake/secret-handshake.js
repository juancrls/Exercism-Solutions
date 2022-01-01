//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  let b = [];
  num = num.toString(2);
  
  let obj = {
      1: 'wink',
      10: 'double blink',
      100: 'close your eyes',
      1000: 'jump',
      10000: 'reverse'
  }
  
  for(let i in obj){
      for(let j in obj){
          if(num - j == 0 || obj.hasOwnProperty(num - j)){
              b.push(obj[j]);
              num = num - j
          }
      }
  
      if(num - i > 0){
          b.push(obj[i]);
          num = num - i
      }
  }   
  if(b.includes('reverse')){
      b.pop();
      b.reverse()
  }
return b;
}
