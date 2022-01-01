export const recite = (numOfBottles, numOfVerses) => {
  let result = [];
  for(let i = 0; i < numOfVerses; i++){
      let str = 'one'
      numOfBottles - i == 1 ? str = 'it' : null
 
      result.push(
          `${numOfBottles - i} bottles of beer on the wall, ${numOfBottles - i} bottles of beer.`,
          `Take ${str} down and pass it around, ${numOfBottles - i - 1} bottles of beer on the wall.`,
          ''
      )
  }
  
  result = result.join('\n');
  /1 bottles/g.test(result) ? result = result.replaceAll(/\b1 bottles\b/g, '1 bottle') : null;
  /0 bottles/g.test(result) ? result = result.replaceAll(/\b0 bottles\b/g, 'no more bottles') : null;
  result = result.split('\n')
  result.pop()
  
  if(numOfVerses > numOfBottles){
      result[result.length - 2] = 'N' + result[result.length - 2].substring(1)
      result.pop();
      result.push('Go to the store and buy some more, 99 bottles of beer on the wall.')
  } 
  return result
};
