export const solve = (puzzle) => {
  if(!/\+/g.test(puzzle)) return null;

  let obj;
  let inputArray = [...Array(10).keys()];
  let letters = [...new Set(puzzle.match(/[A-Z]/g))];

  const testPermutation = (array) => {
    let equation = puzzle;
    obj = {};
    
    for(let i = 0; i < letters.length; i++){
      equation = equation.replaceAll(letters[i], array[i]);
      obj[letters[i]] = array[i];
    }
    
    let result = equation.split(' == ').slice(-1).join('');
    if(equation.match(/\d+/g).find(e => e.length > 1 && e.charAt(0) == 0)) return false
    let numbers = equation.split(' == ').slice(0, 1).join('')
    
    if(eval(numbers) == result) return obj
  }

  const createPermutations = (nums) => {
    let length = nums.length, c = [...Array(length)].map(x => 0), i = 1, k, p;

    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = nums[i];
        nums[i] = nums[k];
        nums[k] = p;
        c[i]++;
        i = 1;
        
        if(testPermutation(nums.slice(0, letters.length))) return obj

      } else {
        c[i] = 0;
        i++;
      }
    }
    return null
  }
  return createPermutations(inputArray);
};
