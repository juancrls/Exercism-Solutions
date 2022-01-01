//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export const decodedValue = ([a, b]) => {
  var result = colors.indexOf(a) * 10 + colors.indexOf(b);
  return result;
};

