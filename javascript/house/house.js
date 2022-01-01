


export class House {
  static verse(verseNum) {
    let array = [
      'This is the house that Jack built.',
      '',
      'This is the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the horse and the hound and the horn',
      'that belonged to the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ];
    array = array.toString();
    array = array.split(',,')

    for(let i = 0; i < array.length; i++){
      if(/[,]/g.test(array[i])){
        array[i] = array[i].split(',')
      }
    }
    if(verseNum == 1){
      return [array[verseNum-1]];
    } else {
      return array[verseNum-1];
    }
  }

  static verses(firstNum, secondNum) {
    let array = [
      'This is the house that Jack built.',
      '',
      'This is the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
      '',
      'This is the horse and the hound and the horn',
      'that belonged to the farmer sowing his corn',
      'that kept the rooster that crowed in the morn',
      'that woke the priest all shaven and shorn',
      'that married the man all tattered and torn',
      'that kissed the maiden all forlorn',
      'that milked the cow with the crumpled horn',
      'that tossed the dog',
      'that worried the cat',
      'that killed the rat',
      'that ate the malt',
      'that lay in the house that Jack built.',
    ];
    array = array.toString();
    array = array.split(',,')

    for(let i = 0; i < array.length; i++){
      if(/[,]/g.test(array[i])){
        array[i] = array[i].split(',')
      }
    }
    array = array.slice(firstNum-1, secondNum)

    for(let i = 0; i < array.length-1; i++){
      if(typeof array[i] != 'object'){
        array[i] = array[i].split('  ');
        array[i].push('');
      } else array[i].push('');
    }
    return array.flat(Infinity);
  }
}
