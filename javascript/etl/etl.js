const invert = obj => Object.fromEntries(
    Object.entries(obj).flatMap(([points, letters]) => letters.map(letter => [letter.toLowerCase(), parseInt(points, 10)]))
  ); 

export const transform = (old) => {
  return invert(old);
};

/* invert is a function that change the values on an object by the keys 
(made by slaymance at https://exercism.io/tracks/javascript/exercises/protein-translation/solutions/4202d21cb7f5415596527b399c64d331)

in this exercise I just modified invert() for lowercase() the letters and transform the numbers to real integers. 
*/