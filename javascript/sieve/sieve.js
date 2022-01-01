export const primes = (limit) => {
  let numbers = [...Array(limit + 1).keys()];
  numbers = numbers.slice(2, numbers.length);

  for(let j = 0; j < Math.floor(Math.sqrt(limit)); j++){
    let sum = numbers[0 + j];

    for(let i = numbers[0 + j]; i <= limit; i+= sum){
      if(i == sum) i+= sum;

      if(numbers.indexOf(i) !== -1){
        numbers.splice(numbers.indexOf(i), 1)
      }
    }
  }
  return numbers
};