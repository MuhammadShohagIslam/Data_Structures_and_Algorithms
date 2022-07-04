/*
    *** Queues Data Structure ***
        => A FIFO(First In First Out) data structure!, all elements are first in first out
        => Queues are useful for processing tasks and are foundational for more complex data structures
        => Insertion and Removal can be done in O(1)
    
*/
// *** Implemented Queues Data Structure ***
// create new node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// create Queues class object
class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // enqueue(adding new node at the last)
    enqueue(value) {
        // create a new node
        let newNode = new Node(value);
        // if there is node node, set first and last with null
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // store last node in a variable
            let oldNode = this.last;
            // set newNode to the oldNode' next
            oldNode.next = newNode;
            // set last node with newNode
            this.last = newNode;
        }
        // increment size by 1 and return size of the node
        return ++this.size;
    }
    // dequeue(removing node beginning of the node)
    dequeue() {
        // if there are no node, return null
        if (!this.first) return null;
        // store a removed node in a variable
        let removedNode = this.first;
        // if there are one node, set last node in null
        if (this.first === this.last) {
            this.last = null;
        }
        // update first node
        this.first = this.first.next;
        // decrement the size by 1
        this.size--;
        // return removed value
        return removedNode.value;
    }
}
const queues = new Queues();
queues.enqueue(5); // firstly added node
queues.enqueue(15);
queues.enqueue(25);
console.log(queues.dequeue()); // firstly added node removed
console.log(queues);

/*
    *** Time Complexity of the Stack ***
        => Insertion(push()) - O(1)
        => Removal (pop()) - O(1)
        => Searching - O(N)
        => Access - O(N)
*/
