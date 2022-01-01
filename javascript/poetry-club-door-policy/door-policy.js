// @ts-check

export function frontDoorResponse(blurb) {
  blurb = blurb.trim()
  return blurb[0]
}

export function backDoorResponse(blurb) {
  blurb = blurb.trim()
  return blurb[blurb.length - 1]
}

function capitalize(word) {
  let first = word.charAt(0)

  return first.toUpperCase() + word.substr(1).toLowerCase();
}

export function frontDoorPassword(responses) {
  return capitalize(responses);
}

export function backDoorPassword(responses) {
  return capitalize(responses) + ', please';
}
