export const toRna = (nucleotides='') => {
    let myMap = new Map(); // pode criar chaves para valores (T sempre estará ligado ao A) e pode setar um get para que tenha valores únicos 
    myMap.set('', '');
    myMap.set('C', 'G');
    myMap.set('G', 'C');
    myMap.set('T', 'A');
    myMap.set('A', 'U');   

    if (nucleotides.length > 1){
        let result = '';
        let stringToChar = nucleotides.split('');
        nucleotides = stringToChar; // nucleotides = ['A', 'G', 'C', 'A', 'A', ...]
        for(let y = 0; y < nucleotides.length; y++){
            result = result + myMap.get(nucleotides[y]);
        };
        return result;
    };
    return myMap.get(nucleotides);
};
  