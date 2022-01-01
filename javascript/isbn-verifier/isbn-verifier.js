let result = 0
export const isValid = (str) => {
  str = str
    .replace(/-/g, '')
    .split('');

  let num = 10;
  if(str[str.length-1] == 'X'){
    num--
    result = 10;
  }

  for(let i = 0; i < num; i++){
    result += (parseInt(str[i], 10) * (10 - i)); 
  }
  return ((result % 11) + 11) % 11 == 0 && str.length == 10; 
};
