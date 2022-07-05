/*
    *** Breadth-First-Tree ***
        => Breadth-first search tree is one kind of tree traversal process through which we want to visit every node on the same level, every sibling node before we look at a child.
        => We are working horizontally.
*/
// create a new node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// create binarysearch class
class BinarySearchTrees {
    constructor() {
        this.root = null;
    }
    // inserting the node
    insert(value) {
        // create a new node
        let newNode = new Node(value);
        // check if there is a root, if not the root node now becomes a that new node
        if (!this.root) {
            this.root = newNode;
        } else {
            // current node
            let current = this.root;
            // if there is a root node, check if the value of the new node is reater than or less than value of the root.
            while (true) {
                // if it is less
                if (value < current.value) {
                    // check to see if there is a node to the left
                    if (current.left === null) {
                        // if there is no node add that node as the left property
                        current.left = newNode;
                        return this;
                    } else {
                        // if there is move to that node and repeat these steps
                        current = current.left;
                    }
                } else if (value > current.value) {
                    // check to see if there is a node to the right
                    if (current.right === null) {
                        // if there is no node add that node as the right
                        current.right = newNode;
                        return this;
                    } else {
                        // if there is move to that node and repeat these steps
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
        return this;
    }

    // *** Breadth-First-Trees ***
    BFS() {
        // create a queue (this can be array) and a variable to store the values of nodes visited
        let node = this.root,
            queue = [],
            data = [];
        // place the root node in the queue
        queue.push(node);
        // loop as long as there is anything in the queue
        while (queue.length) {
            // dequeue a node from the queue
            node = queue.shift();
            // push the value of the node into variable that stores the nodes
            data.push(node.value);
            // if there is a left property on th node dequeued - add to the queue
            if (node.left) queue.push(node.left);
            // if there is a right property on th node dequeued - add to the queue
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}
const binarySearchTrees = new BinarySearchTrees();
binarySearchTrees.insert(10);
binarySearchTrees.insert(6);
binarySearchTrees.insert(15);
binarySearchTrees.insert(6);
binarySearchTrees.insert(3);
binarySearchTrees.insert(8);
binarySearchTrees.insert(20);
console.log(binarySearchTrees.BFS());
console.log(binarySearchTrees);
