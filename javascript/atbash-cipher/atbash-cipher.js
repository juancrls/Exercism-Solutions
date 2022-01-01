var plain = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
var cipher = 'zyxwvutsrqponmlkjihgfedcba1234567890'.split('');

export const encode = (str) => {
    var placeholder = '';
    var result = '';

    str = str.replace('.', '').toLowerCase().split(',').join('').split(' ').join('');

    for(let i = 0; i < str.length; i++){
        placeholder += cipher[plain.indexOf(str[i])];
    };

    let x = 0;
    let y = 5;
    for(let j = 0; j < Math.ceil(placeholder.length / 5); j++){
        result += placeholder.substr(x, y) + ' ';
        x += 5;
    };
    if(str.length > 4){
        return result.trim();
    } else return placeholder;
    
};

export const decode = (str) => {
    str = str.split(' ').join('');
    let result = '';
    
    for(let i = 0; i < str.length; i++){
        result += plain[cipher.indexOf(str[i])]
    }
    return result;
};
