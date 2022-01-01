export class Palindromes {
  static generate(range) {
      if(range.minFactor > range.maxFactor){
          throw new Error('min must be <= max');
      }

      let palindromes = []
      let values = [];
      
      for(let i = range.minFactor; i <= range.maxFactor; i++){
          for(let j = range.minFactor; j <= range.maxFactor; j++){
              if(Number(
                  String(i * j)
                      .split('')
                      .reverse()
                      .join('')
                  ) == i * j
              ){
                  palindromes.push([
                      (i * j),
                      [i, j].sort().join(' ')
                  ])
                  values.push(i * j); 
              }
          }
      }
      
      let sortedValues = values.sort((a, b) => a - b);
      let max = sortedValues[values.length-1];
      let min = sortedValues[0];
      let maxFactors = [max, []];
      let minFactors = [min, []];


      // get max array
      for(let i in palindromes){
          if(palindromes[i][0] == max && maxFactors[1]){
              maxFactors[1].push(palindromes[i][1])
          }
      }

      max = maxFactors
      // get min array
      for(let i in palindromes){
          if(palindromes[i][0] == min){
              minFactors[1].push(palindromes[i][1])
          }
      }
      min = minFactors
   
      if(palindromes.length == 0){ // default settings
          var smallestNumber = {
              value: null,
              factors: []
          }
  
          var largestNumber = {
              value: null,
              factors: []
          }
      }else{ // normal case settings
          var smallestNumber = {
              value: min[0],
              factors: min[1]
          }
          var largestNumber = {
              value: max[0],
              factors: max[1]
          }
      }
      
      largestNumber.factors = [...new Set(largestNumber.factors)]
      
      for(let i in largestNumber.factors){
          largestNumber.factors[i] = largestNumber.factors[i].split(' ')
      }
      
      for(let i in largestNumber.factors){
          largestNumber.factors[i] = largestNumber.factors[i].map(x => Number(x))
      }

      smallestNumber.factors = [...new Set(smallestNumber.factors)]

      for(let i in smallestNumber.factors){
          smallestNumber.factors[i] = smallestNumber.factors[i].split(' ')
      }
      
      for(let i in smallestNumber.factors){
          smallestNumber.factors[i] = smallestNumber.factors[i].map(x => Number(x))
      }
      
      return {smallest: smallestNumber, largest: largestNumber}
  }
}