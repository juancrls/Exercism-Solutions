//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (arr) => {
  arr = arr.trim().split('')
  let result = ''

  const checkLastIndex = (arr) => {
    if(
      arr == ''
    ) arr = ' '
    
    if(
      arr[arr.length-1] == '.' ||
      /[a-z]/g.test(arr[arr.length-2]) && arr[arr.length-1] == '!' ||
      /[a-z]/g.test(arr[arr.length-1]) || 
      /\d/g.test(arr[arr.length-1])
    ) result = 'Whatever.'

    if(
      arr[arr.length-1] == '?' && /[A-Z]/g.test(arr[1]) == false 
    ) result = 'Sure.'

    if(
      arr[arr.length-1] == '!' && /[a-z]/g.test(arr[arr.length-2]) == false ||
      arr[arr.length-1] == '!' && /[A-Z]/g.test(arr[arr.length-2]) ||
      /[A-Z]/g.test(arr[arr.length-1])
    ) result = 'Whoa, chill out!'

    if(
      arr == ' '
    ) result = 'Fine. Be that way!'

    if(
      /[A-Z]/g.test(arr[arr.length-2]) && arr[arr.length-1] == '?' && /[A-Z]/g.test(arr[1])
    ) result = 'Calm down, I know what I\'m doing!'
    return result
  }
  checkLastIndex(arr)
  return result;
};

// I need to improve this code later 