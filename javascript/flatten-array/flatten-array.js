export const flatten = (arr) => {
  return arr.flat(Infinity).filter(x => typeof x == 'number')
}
