const units = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
}

const dozenUnique = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
}

const dozen = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
}

export class Say {
  inEnglish(num) {
    if (num < 0 || num > 999999999999) throw new Error("Number must be between 0 and 999,999,999,999.");

    let result = []
    let str = String(num)

    str = str.split('').reverse().join('') // for separate number in chunks of 3 from left to right
    result = str.match(/\d{1,3}/g);
    result = result.map(x => {
      x = x.split('').reverse().join('') // normalize line 45 change
      x = [x]; 
      x[0].length == 3 ? x.push(x[0].slice(1, 3)) : null
      x.length == 2 ? x[0] = x[0].slice(0, 1) : null // for cases where dozen have unique name (eleven, twelve)
      return x // [ [ '9', '87' ], [ '6', '54' ], [ '3', '21' ], [ '1', '23' ] ]
    })
    
    for(let i = 0; i < result.length; i++){
      if(result[i].join('').length == 3){ // for 3 numbers
        result[i][0] = `${units[result[i][0]]} hundred`;
        
        if(dozenUnique.hasOwnProperty(result[i][1])){
          result[i][1] = dozenUnique[result[i][1]]
        }else{
          result[i][1] = result[i][1].split('');
          result[i][1] = `${dozen[result[i][1][0]]}-${units[result[i][1][1]]}` // check for zero
        }
      }

      if(result[i].join('').length == 2){ // for 2 numbers
        if(dozenUnique.hasOwnProperty(result[i][0])){
          result[i][0] = dozenUnique[result[i][0]]
        }else{
          result[i][0] = result[i][0].split('');
          result[i][0] = `${dozen[result[i][0][0]]}-${units[result[i][0][1]]}`
        }
      }

      if(result[i].join('').length == 1){ // for 1 number
        result[i][0] = units[result[i][0]] 
      }

        i == 1 ? result[i].push('thousand') :
          i == 2 ? result[i].push('million') :
            i == 3 ? result[i].push('billion') : null
    }

    result = result.reverse().join(' ').replace(/,/g, ' ');
    result = result.replace(/zero (hundred|thousand|million)|(undefined-)/g, '').replace(/ {2,}/g, ' ');
    /.{1,}zero/g.test(result) ? result = result.replace(/zero/g, '') : null;

    return result.trim()
  }
}