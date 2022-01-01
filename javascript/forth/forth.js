export class Forth {
  constructor() {
    this.integerOperators = {
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2,
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
    }

    this.stackOperators = {
        'dup': (num) => [num, num],
        'drop': (arr) => arr.slice(0, arr.length - 1),
        'swap': (num1, num2) => [num2, num1], 
        'over': (num1, num2) => [num1, num2, num1],
    }

        this.result = [];

        this.newWords = {};
  }

  evaluate(string) {
    string = string.toLowerCase()

    const arithmeticFunction = (operators = null, numbers = null) => {
          if(!/\-?\d+/g.test(string) || string.match(/\d+|[\/*+]|\-(?!\d+)/g).length == 2) throw new Error('Stack empty');
          if(/\-?\d+ 0 \//g.test(string)) throw new Error('Division by zero');
      
          if(!operators || !numbers){
              operators = string.match(/[\/*+]|(dup|over|swap|drop)|\-(?!\d)/gi);
              numbers = string.match(/\-?\d+/g);
          }
          
          if(operators){
              if(Object.keys(this.stackOperators).includes(operators[0])){ // check if stack function includes operator
                  return stackFunction(operators, numbers);
              } else {
  
                  let sum;
                  sum = this.integerOperators[operators[0]](Number(numbers[0]), Number(numbers[1]));
                  numbers.shift();
                  numbers.shift();
                  numbers.unshift(Math.floor(sum));
  
                  operators.shift();
              }
          }

          if(!operators || operators.length == 0) {
              this.result = numbers;
              return; // base return numArr
          } else {
              return arithmeticFunction(operators, numbers); // recursive
          }
      }

      const stackFunction = (op = null, numArr = null) => {
          
          
          if(!op || !numArr){
            op = string.match(/[\/*+]|(dup|over|swap|drop)|\-(?!\d)/gi);
            numArr = string.match(/\-?\d+/g);
          }

          if(!op){
            if(Object.keys(this.newWords).length == 0 && !/\-?\d+/g.test(string)){throw new Error('Unknown command')}
          }

          if(!/\-?\d+/g.test(string)) throw new Error('Stack empty');
          if(op){
              if(Object.keys(this.integerOperators).includes(op[0])){
                  return arithmeticFunction(op, numArr);
              } 
  
              if(op[0] == 'dup'){
                  
                  numArr[numArr.length - 1] = this.stackOperators[op[0]](numArr[numArr.length - 1]);
                  numArr = numArr.flat();
                  op.shift();
              }
              
              if(op[0] == 'drop'){
                  numArr = this.stackOperators[op[0]](numArr);
                  op.shift();
              }
  
              if(op[0] == 'swap'){
                  if(numArr.length < 2) throw new Error('Stack empty');
                    
                  if(!/(\-?\d+ ){3,}swap/g.test(string)){
                    let swapTarget;
                    /\-?\d+ \-?\d+ swap/.test(string) ? swapTarget = string.match(/\-?\d+ \-?\d+ swap/)[0].split(' ') : null;
                    
                    let swappedNums;
                    
                    if(swapTarget){
                        swappedNums = this.stackOperators[op[0]](swapTarget[0], swapTarget[1]);
                        string = string.split(' ').slice(3, string.length - 1);
                        string.unshift(swappedNums[1]);
                        string = string.join(' ');
                    }

                    this.result.push(swappedNums[0]);

                    if(this.result.length == numArr.length - 1){
                        this.result.push(numArr[0]);
                        numArr = this.result
                    }
                } else {
                    let swappedNums = this.stackOperators[op[0]](numArr[numArr.length - 2], numArr[numArr.length - 1]);
              
                    numArr = numArr.slice(0, numArr.length - 2);
                    numArr.push(swappedNums);
                    numArr = numArr.flat();
                }

                  op.shift();
              }
              
              if(op[0] == 'over'){
                  if(numArr.length < 2) throw new Error('Stack empty');
                  
                  let swappedNums = this.stackOperators[op[0]](numArr[numArr.length - 2], numArr[numArr.length - 1]);
                  
                  numArr = numArr.slice(0, numArr.length - 2);
                  numArr.push(swappedNums);
                  numArr = numArr.flat();
                  op.shift();
              }
          }
 
          if(!op || op.length == 0) {
              this.result = numArr;
              return; // base return numArr
          } else {
              return stackFunction(op, numArr); // recursive
          }
      }

      if(string.charAt(0) == ':' && string.charAt(string.length - 1) == ';'){ // create new function
        if(/: \-?\d+ \-?\d+ ;/g.test(string)) throw new Error('Invalid definition');
        string = string.split(' ');
        string = string.slice(1, string.length - 1); // removes : and ;

        let customName = string[0];
        let customFunction = string.slice(1, string.length).join(' ');

        Object.keys(this.newWords).forEach(val => { // for new functions that use custom functions (': foo 10 ;'), (: bar foo 1 + ;)
            if(customFunction.split(' ').includes(val)){
                customFunction = customFunction.replace(val, this.newWords[val])
                this.newWords[customName] = customFunction
            }
        })
        this.newWords[customName] = customFunction;

        return;
      }

      Object.keys(this.newWords).forEach(val => { // for new functions that use custom functions (: bar foo 1 + ;)
          if(string.split(' ').includes(val)){
              string = string.replaceAll(val, this.newWords[val])
          }
      })


      if(!Object.keys(this.integerOperators).every(item => string.indexOf(item) == -1)){
          return arithmeticFunction();
      } else {
          return stackFunction();
      }
      
  }

  get stack() {
      return this.result.map(x => Number(x));
  }
}