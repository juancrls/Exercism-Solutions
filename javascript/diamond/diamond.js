//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (char) => {
  let ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let len = (ALPHA.indexOf(char) + 1) * 2;
  let num = 1;
  
  let result = [...Array(len - 1)].map((x=[]) => {
    for(let i = 0; i < len - 1; i++){x.push(' ')}
    return x
  })
  
  let middle = Math.floor((result.length) / 2);
  result[0][middle] = 'A';
  result[result.length-1][middle] = 'A';
  
  for(let i = 1; i < middle + 1; i++){
    result[i][middle-i] = ALPHA[i];
    result[i][middle+i] = ALPHA[i];
  }
  
  
  for(let i = result.length - 2; i > middle; i--){
    result[i][middle-num] = ALPHA[num];
    result[i][middle+num] = ALPHA[num];
    num++;
  }
  
  result = result.map(x => x.join(''));
  return result
}
