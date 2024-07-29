Here is a JavaScript solution for the problem:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    verticalOrderTraversal() {
        if (!this.root) return;

        let map = new Map();
        let queue = [];
        queue.push([this.root, 0]);

        while (queue.length) {
            let [node, hd] = queue.shift();

            if (!map.has(hd)) {
                map.set(hd, []);
            }

            map.get(hd).push(node.data);

            if (node.left) {
                queue.push([node.left, hd - 1]);
            }

            if (node.right) {
                queue.push([node.right, hd + 1]);
            }
        }

        let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
        for (let key of sortedKeys) {
            console.log(map.get(key).join(' '));
        }
    }
}

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

tree.verticalOrderTraversal();
```

This solution uses a breadth-first search approach to traverse the binary tree. It uses a queue to keep track of nodes to visit and their horizontal distances from the root. It also uses a map to store nodes at each horizontal distance. The keys in the map are sorted to ensure the vertical order traversal is from left to right.