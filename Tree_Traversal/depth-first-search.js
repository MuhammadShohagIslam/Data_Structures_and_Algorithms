/*
    *** Depth First Search ***
        => Depth-first search is an algorithms for traversing or searching tree or graph data structure
        => The algorithms starts at the root node and explores as far as possibible along branch before backtracking.
    
    * There are three way to traversing tree node with Depth-first search *
        => PreOrder( Firstly visited Root, then visit left side, after then Right side)
        => PostOrder( Firstly visited Left Side, then visit Right side, after then root)
        => InOrder( Firstly visited Left Side, then visit root, after then Right side)     
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

    // *** Depth-First- PreOrder***
    // we are going to visit the node first
    //  then we look at the entire left side, we traverse the left
    // then we traverse the right
    DFSPreOrder() {
        // create a varibale to store the values of nodes visited
        let data = [];
        // store the root of the BST  in a variable called current
        let current = this.root;
        // a helper function which accepts a node
        function traverse(node) {
            // push the value of the node to the variable that stores the values
            data.push(node.value);
            // if the node has a left property, call the helper function with the left property on the node.
            if (node.left) traverse(node.left);
            //  if the node has a right property, call the helper function with the right property on the node.
            if (node.right) traverse(node.right);
        }
        // invoke the helper function with the current variable
        traverse(current);
        // return the array of values
        return data;
    }

    // *** Depth-first PostOrder***
    // we start at the root, but we not going visit it.
    // we are going to look at the left and go all the way down to the left
    // then all the way down to the right.
    // then we visited root
    DFSPostOrder() {
        // create a variable to store the values of node visited
        let data = [];
        // store the root of the BST in a variable called current
        let current = this.root;
        function traverse(node) {
            // if the node has a left property, call the helper function with the left property on the node.
            if (node.left) traverse(node.left);
            // if the node has a right property, call the helper function with the right property on the node.
            if (node.right) traverse(node.right);
            // push the value of the node to the variable that stores the values
            data.push(node.value);
        }
        // invoke the helper function with th current variable
        traverse(current);
        // return the array of values
        return data;
    }
    
    // *** Depth-first InOrder***
    // we traverse the entire left side,
    // we visit the node
    // then traverse the entire right side
    DFSInOrder() {
        // create a variable to store the values of node visited
        let data = [];
        // store the root of the BST in a variable called current
        let current = this.root;
        // write a helper function which accepts a node
        function traverse(node) {
            // if the node has a left property, call the helper function with the left property on the node.
            if (node.left) traverse(node.left);

            // push the value of the node to the variable that stores the values
            data.push(node.value);

            // if the node has a right property, call the helper function with the right property on the node.
            if (node.right) traverse(node.right);
        }
        // invoke the helper function with the current variable
        traverse(current);
        // return the array of values
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
console.log(binarySearchTrees.DFSPreOrder());
// console.log(binarySearchTrees);
