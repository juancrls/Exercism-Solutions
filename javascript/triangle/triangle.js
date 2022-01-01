export class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.sides = [this.x, this.y, this.z];
  }

  problemSolved(){
      this.sides.sort((a, b) => a - b);
      if(this.sides[2] > 0 && this.sides[2] < this.sides[1] + this.sides[0]){
        return true
      } else return false
  }
  
  isEquilateral() {
    if(this.problemSolved(this.sides) && this.x == this.y && this.y == this.z){
      return true
    } else return false
  }

  isIsosceles() {
    if(this.problemSolved(this.sides) && this.x == this.y || this.x == this.z && this.problemSolved(this.sides) || this.z == this.y && this.problemSolved(this.sides)){
      return true
    } else return false
  }

  isScalene() {    
    
    if(this.problemSolved(this.sides) && this.x != this.y && this.y != this.z){
      return true
    } else return false;
  }
}
// i love you