export const findAnagrams = (word, anagrams) => {
    let result = [];
    let check = (word) => {
        return word
            .toLowerCase()
            .split('')
            .sort()
            .join('')
    }

    for (let i of anagrams) {
        if(check(word) === check(i) && i.toLowerCase() != word.toLowerCase()) {
            result.push(i)
        }
    }
    return result
  }