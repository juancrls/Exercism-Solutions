export class BinarySearchTree {
  constructor(root) {
    this.root = root;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this.root
  }
  get right() {
    return this._right
  }

  get left() {
    return this._left
  }

  insert(num) {
    const searchTree = node => {
      if(num <= node.root){
        if(!node._left){
          node._left = new BinarySearchTree(num)
        }else{
          searchTree(node._left)
        }
      }else if(num > node.root){
        if(!node._right){
          node._right = new BinarySearchTree(num)
        }else{
          searchTree(node._right)
        }
      }
    }
    searchTree(this)
  }

  each(func){
    if(this._left) this._left.each(func);

    func(this.data);

    if(this._right) this._right.each(func);
  }
}