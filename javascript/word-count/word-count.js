export const countWords = (str) => {                          
  const obj = {};                                                // creates an empty object
  const counter = (word) => {                                    // creates a function to the .map()  
    if(obj[word]){                                               // if the selected word already exists, will add 1 to the key value
      obj[word]++                                               
    }else obj[word] = 1                                          // else, the number will be 1 (default value)
  }  
  str.toLowerCase().match(/(\w+'+\w)|(\w+)/gmi).map(counter);    // fix all the impurities off the string  // regex will admits all the characters/numbers, single quotes " ' " and underlines "_"
  return obj;                                                   
};