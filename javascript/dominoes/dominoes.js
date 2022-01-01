export const chain = (elements) => {
  let isEmpty = elements.length == 0;
  let result = [];
  let count = 0;
  let len;
  
  const permutator = (elements) => {
    count++
    let clone = [...elements];

    if(result.length == 0) {
      len = elements.length;
      result.push(elements.shift());
    }
    
    for(let i = 0; i < elements.length; i++) {
      if(result[result.length - 1][1] == elements[i][0]) {
        result.push(elements[i]);
        elements.splice(i, 1)
      }

      if(elements[i] && result[result.length - 1][1] == elements[i][1]) {
        result.push(elements[i].reverse());
        elements.splice(i, 1)
      }
    }

    if(elements.length == 0) return result;

    if(JSON.stringify(clone) == JSON.stringify(elements)) { // nothing changed
      elements = elements.concat(result);
      result = [];
    }

    if(count > len * 2) return false
    if(elements.length != 0) return permutator(elements);
    return true;
  }

  let dominoes = permutator(elements);
  if(isEmpty){
    return elements
  }
  if(dominoes && dominoes[0][0] == dominoes[dominoes.length - 1][1]){
    return elements
  } else {
    return null
  }
}