export const classify = (num) => {
  let div = 1;
  let result = 0;

  while(div <= num / 2){
      if(num % div == 0){
          result += div;
      }
      div++
  }

  if(num < 1){
      throw new Error('Classification is only possible for natural numbers.')
  }

  return (result < num) ? 'deficient' : (result > num) ? 'abundant' : 'perfect';
}
