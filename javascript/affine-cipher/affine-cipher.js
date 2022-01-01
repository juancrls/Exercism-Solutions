const alphabet = Array.from(Array(26)).map((e, i) => {
  return String.fromCharCode(i + 97)
});

const isCoprime = (a, m) => {
	const res = a > m ? a : m;

	for (let i = 2; i < res; i++) {
    if (a % i === 0 && m % i === 0) return false;
  }
	return true;
};

export const encode = (str, obj) => {
  str = str.match(/\w/g) || [];
  str = str.join('').toLowerCase();

  const {a, b} = obj;
  let encryptedArray = [];
  let result = [];
  if (!isCoprime(a, alphabet.length)) throw new Error("a and m must be coprime.");

  for(let i = 0; i < str.length; i++) {
      let alphaIndex = alphabet.indexOf(str.charAt(i));
      let index = (a * alphaIndex + b) % 26;

      if(alphaIndex < 0) {
          encryptedArray.push(str.charAt(i));  
      } else {
          encryptedArray.push(alphabet[index]);
      }
  }

  while(encryptedArray.length != 0) result.push(encryptedArray.splice(0, 5).join(''));
  return result.join(' ')
};

export const decode = (str, obj) => {
  str = str.match(/\w/g) || [];
  str = str.join('').toLowerCase();

  const {a, b} = obj;
  let decryptedObj = {};
  let alphaLen = alphabet.length;

  if (!isCoprime(a, alphaLen)) throw new Error("a and m must be coprime.")
  for(let i = 0; i < alphaLen; i++) decryptedObj[encode(alphabet[i], obj)] = alphabet[i];

  let result = str.split('').map(char => {
    if(/\d/gi.test(char)) return char;
    return decryptedObj[char]
  })
  return result.join('')
}