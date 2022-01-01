export class Zipper {
  constructor(tree, focus, parent) {
    this.tree = tree;
    this.parent = tree || null;
    this.focus = tree || null;
  }

  static fromTree(t) {
    return new Zipper(JSON.parse(JSON.stringify(t)));
  }

  toTree() {
    return this.tree
  }

  value() {
    if (!this.focus) {
      return null
    } else {
      return this.focus.value
    }
  }

  left() {
    let current = this.focus

    if (current.left == null){
      return null
    }

    current = current.left
    this.focus = current
    return this
  }

  right() {
    let current = this.focus

    if (current.right == null){
      return null
    }

    current = current.right
    this.focus = current
    return this
  }

  up() {
    if(this.parent == this.focus){
      return null
    }

    const findParent = (root, node) => {
      if(root == null){
        return;
      }
      
      if (root.left == node || root.right == node) {
        this.focus = root 
        return this
      }
      
      findParent(root.right, node)
      findParent(root.left, node)
    }

    findParent(this.parent, this.focus)
    return this
  }

  setValue(value) {
    this.focus.value = value
    return this
  }

  setLeft(bt) {
    this.focus.left = bt
    return this
  }

  setRight(bt) {
    this.focus.right = bt
    return this
  }
}