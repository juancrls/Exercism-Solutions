export class Series {
  constructor(num) {
    this.num = num
  }

  slices(sliceLength) {
    if(sliceLength == 0) throw new Error('slice length cannot be zero');
    if(sliceLength < 0) throw new Error('slice length cannot be negative');
    if(this.num == '') throw new Error('series cannot be empty');
    if(sliceLength > this.num.length) throw new Error('slice length cannot be greater than series length');






    this.num = this.num.split('');
    let arr = [];
    let result = [];

    for(let i = 0; i < this.num.length - sliceLength + 1; i++){
        for(let j = 0; j < sliceLength; j++){
            arr.push(this.num[j+i]);
            arr[j] = parseInt(arr[j], 10);

        }
        result.push(arr);
        arr = [];
    }

    return result
  }
}
