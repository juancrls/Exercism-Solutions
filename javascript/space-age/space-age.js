//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, x) => { // AIS = Age In Second
  let days = 365.25;
  switch(planet) {
    case 'earth' : days = 365.25;
    break;
    case 'mercury' : days = 87.97;
    break;
    case 'venus' : days = 224.7;
    break;
    case 'mars' : days = 686.98;
    break;
    case 'jupiter' : days = 4332.82;
    break;
    case 'saturn' : days = 10755.0;
    break;
    case 'uranus' : days = 30687.16;
    break;
    case 'neptune' : days = 60190.2;
    default : days;
  }
  
  let STN; // STN = String To Number
  let AIS = ((x / 60 / 60 / 24 / days));
  STN = AIS.toFixed(2);
  return parseFloat(STN);
};
