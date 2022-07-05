/*
        *** What is a Trees ***
            => A data structure that consists of nodes in a parent / child relationship.
            => We can store any kind of data whatever you want. 
            => Trees is 'nonlinear'(they can have branch, more than one path), List is 'linear'(One things, then next and the next, evrything in one line or row)
        
        *** Tree Terminology ***
            => Root: The top node in a tree.
            => Child: A node directly conected to another node when moving away from the root.
            => Parent: The converse notion of a child.
            => Siblings: A group of nodes with the same parent.
            => Leaf: A node with no children.
            => Edge: The connection between one node and another.

        *** Trees use Case ***
            => HTML DOM.
            => Network Routing(Message transfer one to muliple nodes).
            => Abstract Syntax Tree.
            => Artificial Intelligence.
            => Folders in Operating Systems

        *** Binary Search Trees ***
            => It is a special type of trees, they excel from the title at searching
            => We store sorted data in a particular way, we can get data with binary search tree, which makes it easier to retrieve.
            => Binary search tree is a special case of a binary tree, which is a type of a tree.
            => If we take any node on the tree, all numbers are every item is less than this node is located to the left it, or every item or number in our case that is greater than is located to right

    ***  Speacial Binary Search Tree ***
            => Every parent node has at most two children
            => Every node to the left of a parent node is always less than the parent.
            => Every node to the right of a parent node is always greater than the parent.
*/
//*** Implemented Binary Search Data Structure ***
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
    // findinf specific node
    find(value) {
        // if there is no node, return undefined
        if (!this.root) return false;
        // create a current variable
        let current = this.root;
        // declare a found variable for tracking find or not
        let found = false;
        while (!found && current) {
            // check if the value is the less than the parent node
            if (value < current.value) {
                // if there is move to that node and repeat these steps
                current = current.left;
            } else if (value > current.value) {
                // check if the value is the greater than the parent node
                // if there is move to that node and repeat these steps
                current = current.right;
            } else {
                // if we find the node return found true
                found = true;
            }
        }
        // if we do not have a node of value return undefined
        if (!found) return undefined;
        // if we find the value return found is true
        return found;
    }
}
const binarySearchTrees = new BinarySearchTrees();
binarySearchTrees.insert(10);
binarySearchTrees.insert(5);
binarySearchTrees.insert(4);
binarySearchTrees.insert(6);
console.log(binarySearchTrees.find(6));
console.log(binarySearchTrees);

/*
    *** Time Complexity of Binary Search Trees ***
        * Average Case *
            => insertion(insert()) --- O(logn)
            => finding(find()) --- O(logn)
        * Worst Case *
            => O(n)
        * Best Case *
            => O(1)

        Note that: when we can find any data in the first step, in that time it's called best case
*/
