//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (array, func) => {
  let result = [];
  for(let i = 0; i < array.length; i++){
    if(func(array[i])){
      result.push(array[i])
    }
  }
  return result
};

export const discard = (array, func) => {
  for(let i = 0; i < array.length; i++){
    if(func(array[i])){
      array.splice(i, 1)
      i--
    }
  }
  return array
};



