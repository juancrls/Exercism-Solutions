export const parse = (str) => {
  let result = '';
  str = str.match(/[a-zA-Z\s-]/g).join('').replace('-', ' ').split(' ').filter(x => x)

  for(let i = 0; i < str.length; i++){
      result += str[i][0]
  }
  return result.toUpperCase();
};
