export const primeFactors = (num) => {
  let arr = [];

  for(let i = 2; i < num; i++){
      if(num % i == 0){
          num /= i;
          arr.push(i);
          i--
      }
  }
  arr.push(num);
  num == 1 ? arr = [] : null
  return arr;
};
