class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count();
  }

  insert(value) {
    const newNode = new Node(value);
    this.count++

    const searchTree = (node) => {
      // if value < node.value move Left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          // continue Searching
          searchTree(node.left);
        }
      }
      // if value < node.value move right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          // continue Searching
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root)
  }
}

const Bts = new BinarySearchTree(15);
Bts.insert(3);
Bts.insert(36);
Bts.insert(2);
Bts.insert(12);
Bts.insert(28);
Bts.insert(39);
Bts;

// BST { root:
//   Node { value: 15,
//     left: Node { value: 3, left: [Object], right: [Object] },
//     right: Node { value: 36, left: [Object], right: [Object] } },
//  count: 7 }
