/*
    *** Stack Data Structure ***
        => Stack is one kind of data structure which works like the last element added to the stack will be the first element removed from the stack.
        => Short form(A 'LIFO' data structure!)
        => LIFO(Last In First Out)
        => They are not a built in data structure in JavaScript, but are relatively simple to implement

            *** Example ***
        first               last(This one firstly out)
        5,     6,     7,   8
    
    *** Where Stack Are Used ***
        => Managing function invocation
        => Undo / Redo
        => Routing(the history object is treated like a stack!)
*/
// ***** Implemented Stack Data Structure ***
// create node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// make a stack class
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // pushing(Added new element begining of the node)
    push(value) {
        // create a new node
        let newNode = new Node(value);
        // if there are no nodes in the stack, set the first and last property to be the newly created node.
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // create a new variable to store current first property
            let temp = this.first;
            // set first node as a first node
            this.first = newNode;
            // set current node with newly created node next
            this.first.next = temp;
        }
        // increment the size of the stack by 1 and return size of the node
        return ++this.size;
    }
    // pop(removing beginning of the node)
    pop() {
        // if there are no nodes in the stack, return null;
        if (!this.first) return null;
        // create removed variable for storing first node
        let removed = this.first;
        // if there is only 1 node, set the first and last property to be null
        if (this.first === this.last) {
            this.last = null;
        }
        // set the first node to the removed's next
        this.first = this.first.next;
        // decremented the size
        this.size--;
        // return removed value
        return removed.value;
    }
}
let stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(15);
stack.push(25); // lastly pushed node
stack.pop(); // remove lastly pushed node
console.log(stack);

/*
    *** Time Complexity of the Stack ***
        => Insertion(push()) - O(1)
        => Removal (pop()) - O(1)
        => Searching - O(N)
        => Access - O(N)
*/
