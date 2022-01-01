export const convert = (x) => {
  let str = '';
  if(x % 3 == 0){
    str = str + 'Pling';
  } 
  
  if(x % 5 == 0){
    str = str + 'Plang';
  }  

  if(x % 7 == 0){
    str = str + 'Plong';
  } 
  
  if(str === ''){
    str = str + x;
  }
  
  return str;
};
