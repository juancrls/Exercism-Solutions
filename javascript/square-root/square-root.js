export const squareRoot = (num) => {
  let x = 1;
  let subtractions = 0;

  do{
    num = num - x;
    x = x + 2;
    subtractions++
  }while(num != 0);

  return subtractions
};
