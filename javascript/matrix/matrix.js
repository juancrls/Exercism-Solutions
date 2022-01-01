export class Matrix {
  constructor(str) {
    this.str = str;
  }

  get rows() {
    let arr = this.str.split('\n');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i]
        .split(' ')
        .map((string) => parseInt(string, 10));
    }
  return arr
  }

  get columns() {
    let arr = this.str.split('\n');
    let result = [];
    let finalResult = [];
    let count = arr.length; 
    
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i]
        .split(' ')
        .map((str) => parseInt(str, 10));
    }

    if(arr[0].length > arr.length){count = arr[0].length}

    for(let i = 0; i < count; i++){
      result = [];
      for(let k = 0; k < arr.length; k++){
        result.push(arr[k][i]);
      }
      finalResult.push(result)
    }
    return finalResult;
  }
}
