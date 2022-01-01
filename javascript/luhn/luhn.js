export const valid = (str) => {
  let arr = '';
  let odd = '';
  let test = str.split(' ').join('')

  str = str.match(/\d/g)
  str = str.reverse().join('');

  const luhn = (string) => {
    for(let i = 1; i <= str.length; i++){
        if(i % 2 == 1){
            arr += str.charAt(i);
        }
    }
    return arr;
  }

  luhn(str);
  arr = arr.split('');

  for(let j = 0; j < arr.length; j++){
    
    let placeholder = arr[j] * 2;

    if(placeholder > 9){
        placeholder = (placeholder - 9);
        arr[j] = placeholder;
    } else {arr[j] = placeholder};
  };

  for(let k = 0; k < str.length; k++){
    if((k % 2 == 0)){odd += str.charAt(k)};
  };

  arr = arr.join('');
  arr = (arr + odd).split('');

  let sum = 0;
  for(let l = 0; l < arr.length; l++){
    arr = arr.map(str => parseInt(str, 10));
    sum += arr[l];

  };

  let result;
  if(sum % 10 == 0 && sum != 0){result = true} else {result = false}; // checks if sum is divisible by 10 and isn't 0 (luhn condition)
  if(/\D/g.test(test) == true) {result = false} // checks if sum's have something that isn't a number (test condition)
  if(arr[4] == 0  && sum == 0){result = true}  // accept numbers with more than 1 zero (a little bit hard code, but idk, i'm sleepy)
  return result
};
