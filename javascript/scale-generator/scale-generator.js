export class Scale {
  constructor(tonic) {
    this.tonic = tonic
  }
  
  chromatic() {
    let flats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
    let base = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']; 
    let usesFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'f', 'bb', 'eb'];
    let result = [];

    if(usesFlats.includes(this.tonic)) base = flats;

    this.tonic = this.tonic.charAt(0).toUpperCase() + this.tonic.slice(1);

    let i = base.indexOf(this.tonic);
    let len = base.length;

    for(i; i < len + 1; i++){
        if(i == len && result.length !== 12) i = 0
        if(result.length == 12) break;
        result.push(base[i])
    }
    return result
  }

  interval(intervals) {
    intervals = intervals.padEnd(12, 'm').split(''); // padEnd with 'm' for create default 0 values
    
    intervals = intervals.map(x => {
        x == 'm' ? x = 0 :
        x == 'M' ? x = 1 : 
        x == 'A' ? x = 2 : null
    
        return x
    })
    let scaleWithInterval = this.chromatic(this.tonic);

    for(let i = 1; i <= 12; i++){
        scaleWithInterval.splice(i, intervals[i-1])
    }
    return scaleWithInterval
  }
}