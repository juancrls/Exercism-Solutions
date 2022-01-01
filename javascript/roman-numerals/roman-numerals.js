//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (num) => {
  let arr = [];
  let result = '';

  const obj = {
          '1': 'I',
          '4': 'IV',
          '5': 'V',
          '9': 'IX',
          '10': 'X',
          '40': 'XL',
          '50': 'L',
          '90': 'XC',
          '100': 'C',
          '400': 'CD',
          '500': 'D',
          '900': 'CM',
          '1000': 'M' 
  };

  while(num > 0){
      for(let i in obj){
          if(num - i >= 0) {
              arr.push(parseInt(i, 10))
          }
      }
      result += obj[arr[arr.length-1]]
      num -= arr[arr.length-1]
      arr = []
  }


  return result
};
