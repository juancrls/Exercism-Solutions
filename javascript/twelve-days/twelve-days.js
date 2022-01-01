let numbers = [
  ['a', 'first'],
  ['two', 'second'],
  ['three', 'third'],
  ['four', 'fourth'],
  ['five', 'fifth'],
  ['six', 'sixth'],
  ['seven', 'seventh'],
  ['eight', 'eighth'],
  ['nine', 'ninth'],
  ['ten', 'tenth'],
  ['eleven', 'eleventh'],
  ['twelve', 'twelfth']
]

let words = [
  'Partridge',
  'Turtle Doves',
  'French Hens',
  'Calling Birds',
  'Gold Rings',
  'Geese-a-Laying',
  'Swans-a-Swimming',
  'Maids-a-Milking',
  'Ladies Dancing',
  'Lords-a-Leaping',
  'Pipers Piping',
  'Drummers Drumming',
]


export const recite = (a=1, b=a) => {
  let result = '';
  for(let i = a-1; i < b; i++){
    result += `On the ${numbers[i][1]} day of Christmas my true love gave to me: ${numbers[i][0]} ${words[i]}`
    
    for(let j = i-1; j > -1; j--){
      j == 0 ? result += `, and ${numbers[j][0]} ${words[j]}` : result += `, ${numbers[j][0]} ${words[j]}`
    }
    result += ' in a Pear Tree.\n'
    i > -1 && i < b-1 ? result += '\n' : null
  }
  return result
};

