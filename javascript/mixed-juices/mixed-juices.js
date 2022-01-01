// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 0;

  switch(name){
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
      time = 1.5;
      break;
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default: 
      time = 2.5;
      break;
  }

  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesUsed = 0;
  let wedges = 0;

  for(let size of limes){
    if(wedges < wedgesNeeded){
      switch(size){
        case 'small':
          wedges += 6;
          limesUsed += 1;
          break;
        case 'medium':
          wedges += 8;
          limesUsed += 1;
          break;
        case 'large':
          wedges += 10;
          limesUsed += 1;
          break;
        default:
          null;
      }
    }
  }
  return limesUsed
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
  while(timeLeft > 0) {
    let currentOrder = orders[0];
    let timeUsed = timeToMixJuice(currentOrder);
    
    timeLeft -= timeUsed;
    orders.shift();
  }
  return orders;
}
