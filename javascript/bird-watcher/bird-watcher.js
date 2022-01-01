// @ts-check
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((total, numOfBirds, i) => total += numOfBirds);
}


export function birdsInWeek(birdsPerDay, week) {
  let result = [], i = 1;;

  while (result.flat().length !== birdsPerDay.length) {
    if(i % 7 == 0) {
      result.push(birdsPerDay.slice(i - 7, i));
    }
    i++;
  }

  result = result.map(weekArray => totalBirdCount(weekArray));
  return result[week - 1];
}

export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i += 2){
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
