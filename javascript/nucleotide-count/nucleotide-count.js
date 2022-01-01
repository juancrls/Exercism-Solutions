//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { strictEqual } from "assert";

export class NucleotideCounts {
  static parse(str) {
    let arr = [...Array(4)].map(x => 0);

    for(let i = 0; i < str.length; i++){
      if(/[^ACTG]/g.test(str.charAt(i))){throw new Error('Invalid nucleotide in strand')}
      if(str.charAt(i) == 'A'){arr[0] += 1}
      if(str.charAt(i) == 'C'){arr[1] += 1}
      if(str.charAt(i) == 'G'){arr[2] += 1}
      if(str.charAt(i) == 'T'){arr[3] += 1}
    }
    arr = arr.toString().split(',').join(' ')
    return arr;
  }
}
