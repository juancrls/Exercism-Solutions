export const convert = (string) => {
  const obj = {
    0: [ ' _ ', '| |', '|_|', '   ' ],
    1: [ '   ', '  |', '  |', '   ' ],
    2: [ ' _ ', ' _|', '|_ ', '   ' ],
    3: [ ' _ ', ' _|', ' _|', '   ' ],
    4: [ '   ', '|_|', '  |', '   ' ],
    5: [ ' _ ', '|_ ', ' _|', '   ' ],
    6: [ ' _ ', '|_ ', '|_|', '   ' ],
    7: [ ' _ ', '  |', '  |', '   ' ],
    8: [ ' _ ', '|_|', '|_|', '   ' ],
    9: [ ' _ ', '|_|', ' _|', '   ' ],
  };

  let arr = [];
  let whiteSpaceLen = 0;
  
  /\s{4,}\n/g.test(string) ? whiteSpaceLen = string.match(/\s{4,}\n/g).length : null // if there's any empty line 
  
  let len = string.split('\n').length - whiteSpaceLen - 1
  let blankSpace = '\n' + [...Array(len)].map(x => ' ').join('')
  
  string = string.replace(/\s{4,}\n/g, blankSpace + ',').split(',') // will separate array in cases of (123,456,789) but will not erase the blank spaces on empty lines
  string = string.map(elem => elem.split('\n').map(x => x.match(/.{1,3}/g))) // separate into chunks of 3 (horizontal length size of a number)))
  
  let NUM_OF_NUMBERS = Math.round(string.flat(Infinity).length / 4)
  let count = 0;
  let result = [...Array(NUM_OF_NUMBERS)].map(x => '?') // ['?', '?', '?', '?', '?','?', '?', '?', '?'] default values
  
  for(let x = 0; x < string.length; x++){
      arr.push([])
      for(let i = 0; i < string[x][0].length; i++){
          arr[x].push([])
          
          for(let j = 0; j < 4; j++){
              arr[x][i].push(string[x][j][i])
          }
          
          for(let k in obj){
              if(arr[x][i].join('') == obj[k].join('')){
                  result[count] = k
              }
          }
          count++
      }
      result[count - 1] += ',' 
  }
  result = result.join('')
  result[result.length-1] == ',' ? result = result.slice(0, result.length-1) : null
  
  return result
};
