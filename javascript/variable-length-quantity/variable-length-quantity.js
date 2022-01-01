export const encode = (nums) => {
  let binary = nums.map(n => (n >>> 0)
    .toString(2)
    .split('')
    .reverse()
    .join('')
  );

  let octets = binary.map(b => {
    let chunks = [];
    for(let i = 0; i < b.length; i+= 7){
      chunks.push(b.slice(i, i + 7)
        .split('')
        .reverse()
        .join('')
        .padStart(7, '0')
      );
    }

    let leastSignificant = chunks.shift();
    chunks = chunks.map(byte => '1' + byte);
    chunks.unshift('0' + leastSignificant);
    return chunks
      .reverse()
      .map(x => Number(parseInt(x, 2).toString(10)));
  });

  return octets.flat(Infinity);
};

export const decode = (bytes) => {
  let size = 0
  bytes = bytes.map(hex => {
    hex = hex.toString(2).padStart(8, '0');
    if(/^0/.test(hex)) size++;
    return hex;
  });
  let nums = [...Array(size)].map(arr => []);
  
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < bytes.length; j++){
      nums[i].push(bytes[j].substr(1));
      if(bytes[j][0] == '0') i++;
    }
  }
  nums = nums.map(val => Number(parseInt(val.join(''), 2).toString(10)));
  
  if (nums.length == 0) throw new Error('Incomplete sequence');
  return nums;
};
