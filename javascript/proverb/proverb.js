export const proverb = (...words) => {
  let x, y, result = '';

  if(words.length == 0) return '';
  if(words.length > 1){
    for(let i = 1; i < words.length; i++){
      if(typeof words[i] === 'object') break;
      x = words[i-1]; // 0, 1, 2
      y = words[i]; // 1, 2
      result += `For want of a ${x} the ${y} was lost.\n`;
    }
  }
  typeof words[words.length-1] === 'object' ? result += `And all for the want of a ${Object.values(words[words.length-1])} ${words[0]}.` : 
  result += `And all for the want of a ${words[0]}.`
  return result;
};