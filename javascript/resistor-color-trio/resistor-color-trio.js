
export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors;
  }
  
  get label() {
    let obj = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9
    }
    
    let result = {'values': 0, 'unit': 'ohms'};
    let num = 10;
    
    for(let i = 0; i < 2; i++){
        for(let j in obj){
            if(j == this.colors[i]){
                result['values'] += obj[j] * num
            }
        }
        num = 1
    }
    
    for(let i = 1; i <= obj[this.colors[2]]; i++){
        result['values'] = result['values'] * 10
    }
    
    console.log(result['values'])
    
    if(result['values'] / 1000 > 1){
        result['values'] = result['values'] / 1000;
        result['unit'] = 'kiloohms'
    }

    return `Resistor value: ${result['values']} ${result['unit']}`;
  }
}
