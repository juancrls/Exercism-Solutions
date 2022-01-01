export const prime = (num) => {
  if(num == 0){
    throw new Error('there is no zeroth prime');
  }
  let tempArr = [];
  let arr = [];

  let len = 2;

  while(arr.length < num){
      for(let i = 2; i <= len; i++){
          
          if(len % i == 0){
              tempArr.push(i);
          }

      }

      if(tempArr.length == 1){
          arr.push(tempArr[0])
      }
      
      tempArr = []
      len++
  }

  return arr[arr.length-1];
};

/*
    √ first prime (25 ms)
    √ second prime (2 ms)
    √ sixth prime (1 ms)
    √ big prime (19628 ms) lol
    √ there is no zeroth prime (7 ms)
*/