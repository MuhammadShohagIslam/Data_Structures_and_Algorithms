/*
    *** Singly Linked List ***

        => A singly linked list is a unidirectional that is it can be traversed in only one direction from head to the last node(tail)
        => A data structure that contains a head, tail and length property.
        => Linked list consist of nodes, and each node has a value and a pointer to another node or null.
    
    *** Comparisons with Array ***

        ---------- List -------------
            => Do not have index
            => Connected via node with a next pointer
            => Randon access do not allowed

        ----------- Arrays -------------
            => Index is order!
            => Insertion and deletion can be expensive
            => Can quickly be accessed via specific index
*/
// create a new node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// make a singly linked list class
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // implement pushing(Adding a new node to the end of the Linked List)
    push(value) {
        // push method which accept a value
        // create a new node using the value passed to the Node Class
        let newNode = new Node(value);
        // if there is no head property on the list, set the head and tail to be the newly created node.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // if we have head property on the list, set the next property on the tail to be the new node
            this.tail.next = newNode;
            // set the tail property on the list to be the newly created node
            this.tail = newNode;
        }

        // increament the length by one
        this.length++;
        return this;
    }
    // popping(Removing a node from the end of the linked list!)
    pop() {
        // if there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // looping through the list until i reach the tail
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // assign new tail before tail node
        this.tail = newTail;
        // assign null node next value
        this.tail.next = null;
        // decrement the length by 1
        this.length--;
        // if there is not length, set the default constructore value
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return last removing node
        return current;
    }
    // shifting(Removing a new node from the beginning of the linked list)
    shift() {
        // if there are no nodes in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // store the current head property in a  variable
        let currentHead = this.head;
        // set the head property to be the current head's next property
        this.head = currentHead.next;
        // decrement the length by 1
        this.length--;
        // if there is not length, set the default constructore value
        if (this.length === 0) {
            this.tail = null;
        }
        // return the value of the node removed
        return currentHead;
    }
    // unshifting(Adding a new node to the beginning of the linked list)
    unshift(value) {
        // if there is no node in the list, return undefined
        if (!this.head) {
            return undefined;
        }
        // create a new node with Node class
        let newNode = new Node(value);
        // if there is no head property on the list, set the head and tail to be the newly created node.
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            // set the head newly created node
            this.head = newNode;
        }
        // increment by 1
        this.length++;
        // return our linked list
        return this;
    }
}
const list = new SinglyLinkedList();
list.push(5);
list.push(19);
list.push(39);
console.log(list.unshift(30));
console.log(list);
