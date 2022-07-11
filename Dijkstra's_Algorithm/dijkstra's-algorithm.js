/*
    *** Dijkstra's Algorithm ***
        => Dijkstra's algorithms is the one of the famous and widely used algorithms around which finds the shortest path between two vertices on a graph.

    *** Why is it useful? ***
        => GPS - finding fastest route
        => Network Routing - finds open shortest path for data
        => Biology - used model to spread of virus amoung human
        => Airline tickets - finding cheapest route to your destination
        => Many other uses!
*/
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
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            // set the parentIdx to the idx, and start over!
            idx = parentIdx;
        }
    }
    // dequeue(method removes root element, returns it and rearranges heap using priority)
    dequeue() {
        // create a variable to store root element
        let min = this.values[0];
        // remove last element
        let end = this.values.pop();

        if (this.values.length > 0) {
            // swaping last to first element
            this.values[0] = end;
            // create a method sinking down for swaping
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        // create a variable to store index number first one
        let idx = 0;
        // create a variable to store length of the priority queue properties
        let length = this.values.length;
        // create a variable to store current node
        let element = this.values[0];

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
                if (leftChildIElement.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            // checking right child node it's out of bound
            if (rightChildIdx < length) {
                rightChildElement = this.values[rightChildIdx];
                // checking left node priority greater than element priority
                if (
                    (swap === null &&
                        rightChildElement.priority < element.priority) ||
                    (swap !== null &&
                        rightChildElement.priority < leftChildIElement.priority)
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
// write weighted Graph
class WeightedGraph {
    constructor() {
        this.adjacency = {};
    }
    // adding vertix
    addVertex(vertex) {
        if (!this.adjacency[vertex]) {
            this.adjacency[vertex] = [];
        }
    }
    // adding edges
    addEdge(vertex1, vertex2, weight) {
        let v1 = this.adjacency[vertex1];
        let v2 = this.adjacency[vertex2];
        if (v1 && v2) {
            v1.push({ node: vertex2, weight });
            v2.push({ node: vertex1, weight });
        }
    }
    // *** Implemented Dijkstra's Algorithms ***
    Dijkstra(start, finish) {
        // create a variable to store priority queue
        let node = new PriorityQueue();
        // create a variable to store distance
        let distance = {};
        // create a variable to store previous
        let previous = {};
        // create a path array to store path
        let path = [];
        // declare smallest node
        let smallest;
        // build the inisitial state
        for (let vertex in this.adjacency) {
            if (vertex === start) {
                distance[vertex] = 0;
                node.enqueue(vertex, 0);
            } else {
                distance[vertex] = Infinity;
                node.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (node.values.length) {
            smallest = node.dequeue().value;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } else {
                if (smallest || distance[smallest] !== Infinity) {
                    for (let neighbor in this.adjacency[smallest]) {
                        // create a variable to find neighboring node
                        let nextNode = this.adjacency[smallest][neighbor];
                        // create a variable to calculate new distance to neighboring node
                        let candidate = distance[smallest] + nextNode.weight;
                        // create a variable to store next neighbor node
                        let nextNeighbor = nextNode.node;
                        // checking candidate weight less than smallest node weight
                        if (candidate < distance[nextNeighbor]) {
                            // updating new smallest distance to neighbor
                            distance[nextNeighbor] = candidate;
                            // updating previous - how we got to neighbor
                            previous[nextNeighbor] = smallest;
                            // updating priority queue
                            node.enqueue(nextNeighbor, candidate);
                        }
                    }
                }
            }
        }
        // return final path of the path
        return path.concat(smallest).reverse();
    }
    
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");
weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("F", "E", 1);
weightedGraph.Dijkstra("A", "E");
