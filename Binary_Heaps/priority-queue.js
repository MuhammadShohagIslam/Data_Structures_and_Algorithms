/*
    *** Priority Queue ***
        => A data structure where each element has a priority.Element with higher prioprities are served before element with lower priorities.
        => Iterate over the entire thing to find the highest priority element.
*/
// *** Implement Priority Queue ***
// create node class
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// make a PriorityQueue class
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    // enqueue (method accepts a value and priority, makes a new node and puts it in the right spot based of its priority)
    enqueue(value, priority) {
        // create new priority node
        let newNode = new Node(value, priority);
        // push new node at the Priority Queue property
        this.values.push(newNode);
        // swaping each value by using bubble up
        this.bubbleUp();
    }
    bubbleUp() {
        // create a variable to store index of the new adding node
        let idx = this.values.length - 1;
        // create a variable to store element of the new adding node
        let element = this.values[idx];
        while (idx > 0) {
            // finding parent node based of idx
            let parentIdx = Math.floor((idx - 1) / 2);
            // create a variable to store parent node
            let parent = this.values[parentIdx];
            // checking element is the greater than parent, if it is, swaping
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // set the parentIdx to the idx, and start over!
            idx = parentIdx;
        }
    }
    // dequeue(method removes root element, returns it and rearranges heap using priority)
    dequeue() {
        // create a variable to store root element
        let max = this.values[0];
        // remove last element
        let end = this.values.pop();

        if (this.values.length > 0) {
            // swaping last to first element
            this.values[0] = end;
            // create a method sinking down for swaping
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        // create a variable to store index number first one
        let idx = 0;
        // create a variable to store length of the priority queue properties
        let length = this.values.length;
        // create a variable to store current node
        let element = this.values[idx];

        while (true) {
            // create a variable which is the store  left childret index
            let leftChildIdx = 2 * idx + 1;
            // create a variable which is the store right children index
            let rightChildIdx = 2 * idx + 2;
            // decalare a variable left children element and right children element
            let leftChildIElement, rightChildElement;
            // create a swap variable for tracking swaping
            let swap = null;
            // checking left child node it's out of bound
            if (leftChildIdx < length) {
                leftChildIElement = this.values[leftChildIdx];
                // checking left node priority greater than element priority
                if (leftChildIElement.priority > element.priority) {
                    swap = leftChildIdx;
                    console.log("bbbbbbbbbbbbbbbb");
                }
            }
            // checking right child node it's out of bound
            if (rightChildIdx < length) {
                rightChildElement = this.values[rightChildIdx];
                // checking left node priority greater than element priority
                if (
                    (swap === null &&
                        rightChildElement.priority > element.priority) ||
                    (swap !== null &&
                        rightChildElement.priority > leftChildIElement.priority)
                ) {
                    console.log("aaaaaaaaaaaaaa");
                    swap = rightChildIdx;
                }
            }
            // if there is no swap looping is break
            if (swap === null) break;
            // if the left or right child is greater than element, swap,
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("commom cold", 1);
priorityQueue.enqueue("gunshot", 5);
priorityQueue.enqueue("high fever", 2);
console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
