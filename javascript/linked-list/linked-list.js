class Node{
  constructor(value, next){
    this.value = value;
    this.next = next || null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data){
      let cur = this.head

      if(cur == null){ // if len == 0
          this.head = new Node(data, cur)
      } else {
          while(cur.next){
              cur = cur.next 
          }
          cur.next = new Node(data, null);
      }
      
      this.size++
  }

  pop(){
      let popped;

      let cur = this.head
      if(cur.next == null){ // if len = 1
          popped = this.head.value;
          this.head = null;
      }else{
          while(cur.next.next){
              cur = cur.next 
          }

          if(cur.next.next == null) { // if len > 1
              popped = cur.next.value
              cur.next = null 
          }
      }
      this.size--
      return popped
  }

  shift(){
      let shiftValue = this.head.value;
      this.head = this.head.next      
      this.size--
      return shiftValue
  }

  unshift(data){
      this.head = new Node(data, this.head)
      this.size++
  }

  delete(element){
      let cur = this.head;
      let prev;

      if(cur.value !== element && !cur.next) return;
      if(cur.value == element){
          this.head = cur.next;
      } else {
          while(cur.value !== element){
              prev = cur;
              cur = cur.next;
          }

          prev.next = cur.next
      }
      this.size--
  }

  count(){
      return this.size
  }
}