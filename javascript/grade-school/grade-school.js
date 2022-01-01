export class GradeSchool {
  constructor(){
    this.db = {}
  }

  roster() {
    return this.db;
  }

  add(name, grade) {
      if(!this.db[grade]){
          this.db[grade] = [];  
          this.db[grade].push(name);
      }else{
          this.db[grade].push(name);
          this.db[grade].sort()
      }
      return this.db;
  }

  grade(x) {
    if(this.db[x] && this.db[x].hasOwnProperty(this.db[x])) return this.db[x];
    return [] 
  }
}
