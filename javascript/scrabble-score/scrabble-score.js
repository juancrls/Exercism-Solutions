//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  word = word.toUpperCase().split('');
  let result = 0;

  let obj = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],       
      2: ['D', 'G'],                               
      3: ['B', 'C', 'M', 'P'],                         
      4: ['F', 'H', 'V', 'W', 'Y'],                      
      5: ['K'],                                  
      8: ['J', 'X'],                               
      10: ['Q', 'Z']                   
  }

  for(let j = 0; j < word.length; j++){
      for(let i in obj){
          if(obj[i].includes(word[j])){
              result += parseInt(i, 10)
          }
      }
  }
  return result;
};
