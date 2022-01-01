export const score = (arr, category) => {
  arr = arr.sort()
  let result = 0
  let str = arr.join('');
  let comb = []
  
  arr.forEach(x => comb.push(str.split(x).length - 1))
  
  category == 'ones' && arr.includes(1) ? result = 1 * arr.join('').split(/(?!1)\d/g).join('').length : 
  category == 'twos' && arr.includes(2) ? result = 2 * arr.join('').split(/(?!2)\d/g).join('').length : 
  category == 'threes' && arr.includes(3) ? result = 3 * arr.join('').split(/(?!3)\d/g).join('').length : 
  category == 'fours' && arr.includes(4) ? result = 4 * arr.join('').split(/(?!4)\d/g).join('').length : 
  category == 'fives' && arr.includes(5) ? result = 5 * arr.join('').split(/(?!5)\d/g).join('').length : 
  category == 'sixes' && arr.includes(6) ? result = 6 * arr.join('').split(/(?!6)\d/g).join('').length : null
  
  
  category == 'little straight' && JSON.stringify(arr) == JSON.stringify([1, 2, 3, 4, 5]) ? result = 30 :
  category == 'big straight' && JSON.stringify(arr) == JSON.stringify([2, 3, 4, 5, 6]) ? result = 30 :
  category == 'choice' ? result = arr.reduce((a, b) => a + b) :
  category == 'yacht' && comb.includes(5) ? result = 50 : 
  category == 'four of a kind' && (comb.includes(4) || comb.includes(5)) ? 
    comb.includes(5) ? result = arr[0] * 4 : comb.includes(4) ? result = arr[comb.indexOf(4)] * 4 : null : 
  category == 'full house' && comb.includes(3) && comb.includes(2) ? result = arr.reduce((a, b) => a + b) : null

  return result
};
