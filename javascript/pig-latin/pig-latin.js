export class translator {
    static translate(word){
        word = word.split(' ');
        let result = '';
        
        for(let i = 0; i < word.length; i++){
            if(i > 0){
              result += ' ';
            }

            if(/[aeiou]/.test(word[i][0]) || /xr|yt/.test(word[i].slice(0, 2))){
                result += word[i] + 'ay';
            } else if(/qu/.test(word[i].slice(1, 3)) || /sch|thr/.test(word[i].slice(0, 3))){
                result += word[i].slice(3) + word[i].slice(0, 3) + 'ay';
            } else if(/th|rh|ch|qu/.test(word[i].slice(0, 2))){
                result += word[i].slice(2) + word[i].slice(0, 2) + 'ay';
            } else result += word[i].slice(1) + word[i].slice(0, 1) + 'ay';
        }
        return result;
    }
}