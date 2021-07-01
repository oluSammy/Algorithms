class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearch {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  insert(value) {
    const newNode = new Node(value);
    this.count++;

    const searchTree = (node) => {
      // if value is less than node.value, move left
      if (value < node.value) {
        // if there is no node.left insert
        if (!node.left) {
          node.left = newNode;
        } else {
          // continue searching
          searchTree(node.left);
        }
      }
      // if value is greater than node.value, move right
      else if (value > node.value) {
        // if there is no node.right insert
        if (!node.right) {
          node.right = newNode;
        } else {
          // continue searching
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root)
  }
}

const tree = new BinarySearch(15)
tree.insert(4);
tree.insert(26);
tree.insert(1);
tree.insert(11);
tree.insert(25);
tree.insert(30);

tree
