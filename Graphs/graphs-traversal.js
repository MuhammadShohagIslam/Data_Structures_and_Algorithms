/*
    *** Graph Traversal ***
        => Graph Traversal means visting, updating, checking each or every single node or  vertex in a graph.
    
    *** Graph Traversal Uses ***
        => Peer to peer newtworking
        => Web Crawlers
        => Finding "closest" / matches / recommendation
        => Shorted path problems
                => GPS Navigation
                => Solving mazes
                => AI(shortest path to win the game)
*/
class Graph {
    constructor() {
        this.adjacency = {};
    }
    addVertix(vertix) {
        if (!this.adjacency[vertix]) {
            this.adjacency[vertix] = [];
        }
    }
    addEdge(vertix1, vertix2) {
        if (this.adjacency[vertix1] && this.adjacency[vertix2]) {
            this.adjacency[vertix1].push(vertix2);
            this.adjacency[vertix2].push(vertix2);
        }
    }
    removeEdge(vertix1, vertix2) {
        if (this.adjacency[vertix1] && this.adjacency[vertix2]) {
            this.adjacency[vertix1] = this.adjacency[vertix1].filter(
                (v) => v !== vertix2
            );
            this.adjacency[vertix2] = this.adjacency[vertix2].filter(
                (v) => v !== vertix1
            );
        } else {
            return undefined;
        }
    }
    removeVertix(vertix) {
        if (this.adjacency[vertix]) {
            while (this.adjacency[vertix].length) {
                const adjacencyVertix = this.adjacency[vertix].pop();
                this.removeEdge(vertix, adjacencyVertix);
            }
            delete this.adjacency[vertix];
        } else {
            return undefined;
        }
    }
    // *** Depth First Search Graph Traversal *** //
    // make a function which accepts a starting node
    depthFirstRecursive(start) {
        // create a list to store the end result, to be returned at the very end
        const result = [];
        // create an object to store visited vertices
        const visited = {};
        // initialize adjacency
        let adjacency = this.adjacency;
        // implemented recursive with fath function
        (function dfr(vertex) {
            // if vertix is empty, return base case
            if (!vertex) return null;
            // mark vertex as visited
            visited[vertex] = true;
            // add vertix to results list
            result.push(vertex);
            // for each neighbor in vertex's neighbor
            adjacency[vertex].forEach((neighbor) => {
                // if the neighbor is not visited, return recursive case
                if (!visited[neighbor]) {
                    return dfr(neighbor);
                }
            });
        })(start);
        // final result of the recursive way depth first graph traversal
        return result;
    }
    // *** Depth First Search Graph Traversal With Iterative Way *** //
    // make a function which accepts a starting node
    depthFirstSearchIterative(start) {
        // create a stack through which we can keep track of vertices
        const stack = [start];
        // create a list to store the end of result. to be retured at the very end
        const result = [];
        // create an object to store visited vertices
        const visited = {};
        // marked vertex is visited
        visited[start] = true;
        while (stack.length) {
            // take last node from the stack array
            const currentVertex = stack.pop();
            // add vertex to the result list
            result.push(currentVertex);
            // for each neighbor in vertex's neighbor
            this.adjacency[currentVertex].forEach((neighbor) => {
                // if the neighbor is not visited, go away
                if (!visited[neighbor]) {
                    // marked vertex is visited
                    visited[neighbor] = true;
                    // add vertex to the stack list
                    stack.push(neighbor);
                }
            });
        }
        // final result of the recursive way depth first graph traversal
        return result;
    }
    // *** Breath First Search Graph Traversal *** //
    // => breadth first prioritize visiting all of the neighbors at the given depth before moving downwards or vistitng neighbor of neighbors.
    // make a function which accepts a starting node
    breadthFirstSearch(start) {
        // create a queue through which we can keep track of vertices
        const queue = [start];
        // create a list to store the end of result. to be retured at the very end
        const result = [];
        // create an object to store visited vertices
        const visited = {};
        // marked vertex is visited
        visited[start] = true;
        // initialize curren vertex for protecting again again delcaration
        let currentVertex;
        while (queue.length) {
            // take a first node from the stack array
            currentVertex = queue.shift();
            // add vertex to the result list
            result.push(currentVertex);
            // for each neighbor in vertex's neighbor
            this.adjacency[currentVertex].forEach((neighbor) => {
                // if the neighbor is not visited, go away
                if (!visited[neighbor]) {
                    // marked vertex is visited
                    visited[neighbor] = true;
                    // add vertex to the queue list
                    queue.push(neighbor);
                }
            });
        }
        // final result of the recursive way depth first graph traversal
        return result;
    }
}
const graph = new Graph();
graph.addVertix("Tokoy");
graph.addVertix("Dallas");
graph.addVertix("Alpas");
graph.addEdge("Tokoy", "Dallas");
graph.addEdge("Tokoy", "Alpas");
console.log(graph.depthFirstRecursive("Tokoy"));
console.log(graph.depthFirstSearchIterative("Tokoy"));
console.log(graph.breadthFirstSearch("Tokoy"));
