export function encode(str){
  str = str.split('')
  let result = []
  
  let charIndex = 0;
  for(let i = 1; i < str.length; i++){
      if(str[i] !== str[i-1]){
          result.push(str.slice(charIndex, i))
          charIndex = i
      }
  }
  
  if(str.length !== result.flat(Infinity).length){
      result.push(str.slice(charIndex, str.length))
  }
  
  for(let i = 0; i < result.length; i++){
      let len = result[i].length
      len == 1 ? len = '' : null;
      result[i] = `${len}${result[i][0]}`
  }
  
  return result.join('')
}


export const decode = (str) => {
  let splitStr = str.match(/\d+[a-zA-Z]| |\d+ |[a-zA-Z]/g)
  let result = '';
  
  for(let i in splitStr){
      if(!/\d+/g.test(splitStr[i])){
          splitStr[i] = '1' + splitStr[i]
      }
  
      if(/\d+/g.test(splitStr[i])){
          for(let j = 0; j < splitStr[i].match(/\d+/g)[0]; j++){
              result += splitStr[i].match(/[a-zA-Z ]/g)[0]
          }
  
      }
  }
  return result  
};
