export const answer = (question) => {
  const operators = {
    'plus' : '+',
    'minus' : '-',
    'multiplied' : '*',
    'divided' : '/'
  }

  if((/What is [-]?\d\?/g).test(question)){
    return Number(question.match(/[-]?\d/g));
  }

  if(!/What is/g.test(question) || !/\d [-]?\d/g.test(question) && /[-]?\d+ [a-z-A-Z]/g.test(question) && !/[-]?\d+ (divided|multiplied|plus|minus)/g.test(question)){
      throw new Error('Unknown operation')
  }

  if(!/[-]?\d+ (divided|multiplied|plus|minus)/g.test(question) || /\d [-]?\d/g.test(question) || /((plus|minus|divided|multiplied) ?){2,}/g.test(question)){
      throw new Error('Syntax error')
  }

  let result = question.match(/[-]?\d+|divided|multiplied|plus|minus/g);


  result = result.map(x => Number(x) ? x = `(${x})` : x).join('');
  
  if(/(plus|minus|divided|multiplied)/g.test(result) && result.match(/[(][-]?\d+[)]/g).length < 2){
    throw new Error('Syntax error')
  }

  for(let i in operators){
    result = result.replaceAll(i, operators[i])
  }

  let signRules = result.match(/([(][-]?\d+[)])(\+|\-)([(][-]?\d+[)])/g)
  result = result.replaceAll(/([(][-]?\d+[)])(\+|\-)([(][-]?\d+[)])/g, `(${signRules})`);

  return eval(result);
};
