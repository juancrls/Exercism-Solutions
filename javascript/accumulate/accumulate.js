export const accumulate = (array, operation) => {
  let result = [];
  let len = array.length;
  
  for(let i = 0; i < len; i++){
    result.push(operation(array[i]))
  }

  return result;
};