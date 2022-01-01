export const convert = (nums, base, newBase) => {
  if (base <= 1) throw new Error('Wrong input base');
  if (newBase <= 1) throw new Error('Wrong output base');
  if (!nums.length || nums.find(n => n < 0 || n >= base) || (nums[0] == 0 && nums[1] >= 0)){
    throw new Error('Input has wrong format');
  }

  let converted = []
  const decToNewBase = (num, newBase) => {
    let result = 0;
    result = Math.floor(num / newBase);
    
    converted.unshift(num - (newBase * result));
    
    if(result == 0){
      return converted;
    } else {
      return decToNewBase(result, newBase);
    }
  };

  let result = 0
  for(let i = nums.length - 1; i >= 0; i--){
    result += nums[nums.length - i - 1] * base ** i 
  }

  if(newBase !== 10){
    return decToNewBase(result, newBase);
  }

  return String(result).split('').map(Number);
}