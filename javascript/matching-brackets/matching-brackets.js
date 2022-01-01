export const isPaired = (str) => {
    if(str == '') return true
    let pairs = str.match(/[()[\]{}]/g).join('')
    if(pairs.length % 2 == 1) return false
    
    let filterPairs = (string) => {
        string = string.replaceAll('()', '');
        string = string.replaceAll('[]', '');
        string = string.replaceAll('{}', '');
        
        if(string.length == 0) return true // BASE 
        if(string.length > 1 && !/{}|\(\)|\[]/g.test(string)) return false // ERROR
        if(string.length > 1) return filterPairs(string) // RECURSIVE
    }
    
    return filterPairs(pairs)
};
