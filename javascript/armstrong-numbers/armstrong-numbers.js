export const isArmstrongNumber = (num) => {
  //153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153`
  let arr = []
  let numArr = num.toString().split('');

  for(let i = 0; i < numArr.length; i++){
      numArr[i] = parseInt(numArr[i], 10);
  }

  for(let i = 0; i < numArr.length; i++){
      arr.push(numArr[i] ** numArr.length)
  }

  if(arr.reduce((acc, cur) => acc + cur) == num){
      return true
  }
  return false
};
