export class SpiralMatrix {
  static ofSize(num) {
    let index = 0
    let times = 0
    let matrix = []

    const createSpiralMatrix = (num) => {
      if(times == 0){
        for(let i = 0; i < num; i++){ // base loop
            matrix.push([...Array(num)])
        }
      }
  
      for(let i = 0 + times; i < num-times; i++){ // right loop
          index++
          matrix[times][i] = index
      }
      
      for(let i = 1 + times; i < num - times; i++){ // down loop
          index++
          matrix[i][num-1-times] = index    
      }
      
      for(let i = 1; i < num-times-times; i++){ // left loop
          index++
          matrix[num-1-times][num-i-1-times] = index
      }
      
      for(let i = 1; i < num-1-times-times; i++){ // up loop
          index++
          matrix[num-i-1-times][times] = index
      }
  
      times++
      console.log(matrix)
      
      if(matrix.flat(Infinity).includes(undefined)){  
          createSpiralMatrix(num)
      }
      return matrix
    }
    return createSpiralMatrix(num)
  }
}
