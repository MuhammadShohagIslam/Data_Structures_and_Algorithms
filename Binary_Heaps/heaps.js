/*
    *** Binary Heaps ***
        => Binary Heaps is a one kind of Binary Search Tree like  data structure where parent node always larger than child node or parent node always smaller than child nodes.
        => Very similar to a binary search tree, but with some different rules!
    
    *** Max Binary Heap ***
        => Each parent has at most two child nodes
        => The value of each parent node is always greater than it's child nodes.
        => In a max Binary Heap the parent is greater than children, but there are no gurantees between sibling nodes.
        => A Binary heap is a compact as possible. All the children of each node are as full as they can be and "left children are filled out first"
        => Every left and right filled out before move in down.
        => No implied dordering between siblings

    *** Why do we need to know this ? ***
        => Binary Heap are used to implement Priority Queues, which are very commonly used data structure
        => They are also used quite a bit, with graph traversal algorithms.
        => it's useful data structure for sorting
*/
/*
        *** Representing Heap ***
            => There's an easy way of storing a binary heap a List / Array.
            
        *** Finding Left Children and Right Children based on Parent Node index number ***
            => If any index of an array N...
                ---> N is the parent node index
                ---> The left children is stored at 2n+1
                ---> The right children is stored at 2n+2
        
        *** Finding Parent Node based on Left Children and Right Children ***
            => If any index of an array N...
                ---> N is the children node 
                ---> The Parent Node is at index => (n-1) / 2
                                                                            floored
               
*/
// *** Implemented Max Binary Heap ***
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    // inser(adding new value)
    insert(element) {
        // push the value into the values property on the heap
        this.values.push(element);
        // swaping each value by using bubble up
        this.bubbleUp();
        console.log(this.values);
        return this.values;
    }
    bubbleUp() {
        // create a variable which is the length of the values property -1
        let idx = this.values.length - 1;
        // create a variable which is the recent added element
        let element = this.values[idx];

        // keep looping as long as the element index greater than 0
        while (idx > 0) {
            // create a variable which is the floor of (index -1) / 2;
            let parentIdx = Math.floor((idx - 1) / 2);
            // create a variable which is the parent element
            let parent = this.values[parentIdx];
            // checking element is the greater than parent, if is it, swaping
            if (element > parent) {
                // swaping parent node to the element node and element to the parent
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                // set the parentIdx to the idx, and start over!
                idx = parentIdx;
            }
        }
    }
    // ExtractMax(Removing from a heap)
    extractMax() {
        // create a variable to store max value
        const max = this.values[0];
        // create a variable which is the end of the heap values property
        let end = this.values.pop();
        if (this.values.length > 0) {
            // swaping first element to the end element
            this.values[0] = end;
            // create a method sinking down for swaping
            this.sinkDown();
        }
        console.log(this.values);
        return max;
    }
    sinkDown() {
        // create a variable which is the store parent index
        let idx = 0;
        // total length of the heap property
        let length = this.values.length;

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
            // checking it's out of bound
            if (leftChildIdx < length) {
                leftChildIElement = this.values[leftChildIdx];
                if (leftChildIElement > element) {
                    swap = leftChildIdx;
                }
            }
            // checking it's out of bound
            if (rightChildIdx < length) {
                rightChildElement = this.values[rightChildIdx];
                if (
                    (swap === null && rightChildElement > element) ||
                    (swap !== null && leftChildIElement < rightChildElement)
                ) {
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
const maxHeap = new MaxBinaryHeap();
maxHeap.extractMax();
/*
    *** Time Complexity of Binary Heaps***
        => insertion(insert()) --- O(logn)
        => removing(find()) --- O(logn)
        => Searching --- O(n)  
*/
