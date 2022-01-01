export const isIsogram = (str) => {
  str = str.toLowerCase();
  str = str.replace(' ', '');
  str = str.replace('-', '');
  var splited = str.split('');
  let unique = [...new Set(splited)];
  if(splited.length == unique.length){return true} else {return false};
};