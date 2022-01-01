const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
      this.diagram = diagram.split('\n');
      this.students = students.sort()


  }

  plants(student) {
      let len = this.students.length;
      
      let STUDENTS_PLANTS = [...Array(len)].map(x => [])
      
      this.diagram.map(array => {
          let count = 0;
          for(let i = 1; i <= array.length; i++){
              if(i % 2 == 0){
                  STUDENTS_PLANTS[count].push(PLANT_CODES[array[i-2]])
                  STUDENTS_PLANTS[count].push(PLANT_CODES[array[i-1]])
                  count++
              }
          }
      })

      return STUDENTS_PLANTS[this.students.indexOf(student)]
  }
}