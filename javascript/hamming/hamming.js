export const compute = (L, R) => {
  let result = 0;  
  if (L.length > 0){
    L = L.split("");
    for(let i = 0; i < L.length; i++){
      if (L[i] !== R[i]){
        result++
      }
    } 
  } else if (L === "" && R === ""){
    return result
  }
    // L or R empty
  if (L === "") {throw("left strand must not be empty")} 
  if (R === "") {throw("right strand must not be empty")} 
    // L or R doesn't have the same length
  if (L.length > R.length || R.length > L.length) {throw("left and right strands must be of equal length")}
  return result
}
  
