export function triplets({ minFactor = 0, maxFactor, sum }) {
  maxFactor = maxFactor || sum; 

  let primitiveTriplets = []
  let triplets = []
  
  for(let y = 1; y <= sum; y++){ 
      for(let x = y + 1; x <= sum; x++){ 
          
          let a = (x**2) - (y**2);
          let b = 2*(x)*(y);
          let c = (x**2) + (y**2);
          
          if(a + b + c <= sum) primitiveTriplets.push([a, b, c]);  
      
      }
  }
  
  for(let i = 1; i < sum; i++){ // Math.sqrt(sum)
      primitiveTriplets.map(arr => {
          let tempTriplet = [];
          arr.forEach(element => {
              tempTriplet.push(element * i);
          })
          if(tempTriplet.reduce((a, b) => a + b, 0) == sum){
              triplets.push(tempTriplet)
          }
      })
  }
  
  let tripletSet = new Set()
  let result = []
  
  for(let i in triplets){
      triplets[i] = JSON.stringify(triplets[i].sort((a, b) => a - b))
      tripletSet.add(triplets[i])
  }
  
  tripletSet = [...tripletSet]
  
  for(let i in tripletSet){
      tripletSet[i] = JSON.parse(tripletSet[i]);
      if(tripletSet[i][0] > minFactor && tripletSet[i][2] < maxFactor){
          result.push(new Triplet(tripletSet[i][0], tripletSet[i][1], tripletSet[i][2]))
      }
  }
  return result.sort((a, b) => a.a - b.a);
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
