export const find = (array, x, start=0, end=array.length) => {
  let mid = Math.floor((start + end) / 2);

  if(start > end) {throw new Error('Value not in array')}
  if(array[mid] === x) {return mid}

  if(array[mid] > x){
    return find(array, x, start, mid-1)
  }else{
    return find(array, x, mid+1, end)
  }
};
