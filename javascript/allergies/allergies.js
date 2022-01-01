const allergies = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128,
}

export class Allergies {
  constructor(score) {
    this.score = score;
  }

  list() {
    let result = [];

    for(let i in allergies){
      if(this.allergicTo(i)){
        result.push(i)
      }
    }
    return result;
  }

  allergicTo(allergy) {
    let value = allergies[allergy];
    return Boolean(this.score & value)
  }
}