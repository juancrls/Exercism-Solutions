export const transpose = (arr) => {
  if(!(arr[0])){return []}
  let biggestIndex = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > biggestIndex.length){
          biggestIndex = arr[i];
      };
  };
  
  let result = [...Array(biggestIndex.length)].map(item => '') // creates an array with X empty strings | X = the biggestIndex of the array
  
  for(let i = 0; i < biggestIndex.length; i++){  
      for(let j = 0; j < arr.length; j++){ 
          if(arr[j][i] == undefined){
              result[i] += ' '; 
          }else result[i] += arr[j][i]; 
      };
  };
  result[result.length-1] = result[result.length-1].trimEnd(); 
  return result;
};


