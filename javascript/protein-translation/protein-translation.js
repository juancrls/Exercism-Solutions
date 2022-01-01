
export const translate = (codon) => {
  var obj = {    
    'AUG': 'Methionine',
    'UGG': 'Tryptophan',  
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine', 
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UCU': 'Serine', 
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
  };

  let result = [];

  if(codon == undefined){
    return result
  }

  if(/[^AUGC]+/.test(codon)){ // ERROR
      throw Error('Invalid codon');
  }

  codon = codon.match(/[AUGC]/g); // FORMAT

  for(let i = 1; i <= codon.length; i++){ // XXX.XXX.XXX
      if(i % 3 == 0){
          codon[i-1] = codon[i-1] + ' ';
      }
  }

  codon = codon.join('');

  let num = codon.search(/(UAA)|(UAG)|(UGA)/g); // STOP CONDON LOCATION

  if(num > -1){
      codon = codon.substring(num, 0) 
  }

  for (let i in obj){
      if(codon.includes(i)){
          result.push(obj[i])
      }
  }
  return result;
};
