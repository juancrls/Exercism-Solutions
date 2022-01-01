//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (num, span) => {
num = num.split('');
let arr = [];
let result = [];

if(span > num.length){
    throw new Error('Span must be smaller than string length');
}else if(span == 0){
    return 1
}else if(span > 0 && num == ''){
    throw new Error('Span must be smaller than string length');
}else if(/[a-zA-Z]/g.test(num)){
    throw new Error('Digits input must only contain digits');
}else if(span < 0){
    throw new Error('Span must be greater than zero');
}

for(let i = 0; i < num.length - span + 1; i++){
    for(let j = 0; j < span; j++){
        arr.push(num[j+i]);
        arr[j] = parseInt(arr[j], 10);

    }
    result.push(arr);
    arr = [];
}

for(let i = 0; i < result.length; i++){
    result[i] = result[i].reduce((a, b) => a * b);
}

return result.sort(function(a, b){return b - a})[0];


};
