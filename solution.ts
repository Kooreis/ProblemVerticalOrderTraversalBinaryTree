Here is a TypeScript solution for the problem:

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class VerticalOrderTraversal {
    verticalOrder(root: TreeNode | null): number[][] {
        if (!root) return [];
        let columnTable: { [key: number]: number[] } = {};
        let minColumn = 0, maxColumn = 0;
        let queue: [TreeNode, number][] = [[root, 0]];

        while (queue.length) {
            let [node, column] = queue.shift()!;
            if (!columnTable[column]) columnTable[column] = [];
            columnTable[column].push(node.val);
            if (node.left !== null) {
                queue.push([node.left, column - 1]);
                minColumn = Math.min(minColumn, column - 1);
            }
            if (node.right !== null) {
                queue.push([node.right, column + 1]);
                maxColumn = Math.max(maxColumn, column + 1);
            }
        }

        let result: number[][] = [];
        for (let i = minColumn; i <= maxColumn; i++) {
            result.push(columnTable[i]);
        }
        return result;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

let v = new VerticalOrderTraversal();
console.log(v.verticalOrder(root));
```

This solution uses a breadth-first search (BFS) to traverse the binary tree. It uses a queue to keep track of nodes to visit, and a hash table to store the nodes at each column. The minimum and maximum column numbers are tracked to generate the final result.