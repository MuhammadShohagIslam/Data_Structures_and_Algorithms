/*
    *** Doubly Liked Lists ***
        => Doubly Liked List is a another data structure like singly liked lists but except every node has another pointer, to the previous node!
        => Doubly liked list need more memory, but it's more flexibility.
        => It's almost always a tradeoff!
*/
/*
    *** Time Complexity of Doubly Linked List ***
        => Insertion(Push(), unshift(), insert()) ----- O(1)
        => Removal(pop(), shift(), remove()) ----- O(1)
        => Searching(get()) --- O(N)
        => Access(get()) --- O(N)
        Note That: Technically searching is O(N / 2), but that's still O(N)

*/
/*
    *** Benefits of the Doubly Linked List ***
        => Doubly Linked Lists are almost identical to singly linked lists except there is an additional pointer to previous node.
        => Better than singly linked list for finding nodes and can be done in half of the time
        => But, it's take more memory for considering extra pointer
*/
// create new node with class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// create a doubly linked lists
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push(adding new node at the last)
    push(value) {
        // create a new node
        let newNode = new Node(value);
        // if the head property is null,set the head and tail to be the newly created node.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // if not, set the next property on the tail to be that node.
            this.tail.next = newNode;
            // set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            // set the tail to be newly created node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Popping(Removing a node from the end of the Doubly Linked List)
    pop() {
        // if there is no head, return undefined
        if (!this.head) return undefined;
        // store the removed tail in a variable to return later
        let removedTail = this.tail;
        // if the length is 1, set the head and tail to be null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the tail to the previous node
            this.tail = removedTail.prev;
            // set the newTails next to the null
            this.tail.next = null;
            // set removed tail prev is null
            removedTail.prev = null;
        }
        // decrement the length
        this.length--;
        return removedTail;
    }
    // Shifting(Removing a node from the beginning of the Doubly Linked List)
    shift() {
        // if the length is 0, return undefined
        if (this.length === 0) return undefined;
        // store the current head property in a variable
        let oldHead = this.head;
        // if the length is one, set head and tail null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the head to be the next of the old head
            this.head = oldHead.next;
            // set the head's prev property to null
            this.head.prev = null;
            // set old head's next to null
            oldHead.next = null;
        }
        // decrement length
        this.length--;
        return oldHead;
    }
    // unshift(adding a node to the beginning of the doubly linked list)
    unshift(value) {
        // create new node
        let newNode = new Node(value);
        // if the length is 0, set the head, tail to be the new node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // this.head.prev = newNode
            // newNode.next = this.head
            // this.head = newNode

            // store old node in a variable
            let oldHeadNode = this.head;
            // update the head to be the new node
            this.head = newNode;
            // set the next property in the new node
            this.head.next = oldHeadNode;
            // set the prev property on the head of the list to be the new new node
            oldHeadNode.prev = this.head;
        }
        // increment length
        this.length++;
        return this;
    }
    // Get(Accessing a node in a doubly linked list by it's position)
    get(index) {
        // if the index is less than 0 or greater or equal to the length, return null
        if (index < 0 || index <= this.length) return null;
        // create count and current variable
        let current;
        let count;
        // if the index is less than or equal to half the length of the list
        if (index <= this.length / 2) {
            // create count variable with 0
            count = 0;
            // store head in a current variable
            current = this.head;
            // loop through the list starting from the head and loop towards the middle
            while (count !== index) {
                current = current.next;
                // increment the count by 1
                count++;
            }
        }
        // if the index is less than or equal to half the length of the list
        if (index >= this.length / 2) {
            // create count variable with the last index
            count = this.length - 1;
            // store tail in a current variable
            current = this.tail;
            // loop through the list starting from the head and loop towards the middle
            while (count !== index) {
                current = current.prev;
                // increment the count by 1
                count--;
            }
        }
        return current;
    }
    // Set(Replacing the value of a node to the in a doubly linked list)
    set(index, value) {
        // get exact node by get method
        let foundNode = this.get(index);
        // if is found node, set value founded node and return true, if not, return false
        if (foundNode) {
            foundNode.value = value;
            return true;
        } else {
            return false;
        }
    }
    // Insert(Adding a node in a Doubly linked list by a certian position)
    insert(index, value) {
        // if index is less than 0 or greater than length, return null
        if (index < 0 || index > this.length) return null;
        // if index is 0, return unshift method for adding new node in the beginning of the node
        if (index === 0) return !!this.unshift(value);
        // if index is as same the length, return push method for adding new node in the last of the node
        if (index === this.length) return !!this.push(value);
        // create new node
        let newNode = new Node(value);
        // get previous node
        let beforeNode = this.get(index - 1);
        // after node
        let afterNode = beforeNode.next;
        // set new node beforeNode's next
        beforeNode.next = newNode;
        // set beforeNode with newNode's prev
        newNode.prev = beforeNode;
        // set afterNode with newNode's next
        newNode.next = afterNode;
        // newnode afterNode's prev
        afterNode.prev = newNode;
        // increment length by 1
        this.length++;
        return this;
    }
    // Remove(Removing a node in a doubly linked list by a certain position)
    remove(index) {
        // if index is less than 0 or greater than length, return null
        if (index < 0 || index > this.length) return null;
        // if index is 0, return unshift method for adding new node in the beginning of the node
        if (index === 0) return !!this.shift();
        // if index is as same the length-1, return push method for adding new node in the last of the node
        if (index === this.length - 1) return !!this.pop();
        // removed node
        let removedNode = this.get(index);
        // get previous node
        let beforeNode = removedNode.prev;
        // after node from removed node
        let afterNode = removedNode.next;
        // update the next and prev properties to remove the found node from the list
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // set next and prev to null on the found node
        removedNode.next = null;
        removedNode.prev = null;
        // decrement length by 1
        this.length--;
        return removedNode;
    }
    // Reverse(Reversing the linked list in place!)
    reverse() {
        // if length is 0, return undefined
        if (this.length === 0) return undefined;
        // if length is 1, return current linked list, otherwise reverse
        if (this.length === 1) {
            return this;
        } else {
            // create a variable called node and initialize it to the head property
            let node = this.head;
            // swap the head and tail
            this.head = this.tail;
            this.tail = node;
            // create a variable called next
            let next;
            // create a variable called prev
            let prev = null;
            // loop through the list
            for (let i = 0; i < this.length; i++) {
                next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            return this;
        }
    }
}
const list = new DoublyLinkedList();
list.push(5);
list.push(19);
list.push(39);
console.log(list);
