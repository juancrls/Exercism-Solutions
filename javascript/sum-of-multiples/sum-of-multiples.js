export const sum = (factors, limit) => {
  let result = new Set();

  factors = factors.map(x => {
    if(x == 0) return 0;
    let placeHolder = x 
    while(x < limit){
      result.add(x)
      x += placeHolder
    }
  })
  result.size > 0 ? result = [...result].reduce((a, b) => a + b) : result = 0
  return result
};