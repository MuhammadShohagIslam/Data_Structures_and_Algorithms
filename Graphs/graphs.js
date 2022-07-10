/*
    *** Graphs ***
        => A Graph data structure consists of a finite ( and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

    *** Uses For Graphs ***
        => Social Networks
        => Location / Mapping
        => Routing Algorithms
        => Visual Heirarchy
        => File System Optimization 
        => EveryWhere

    *** Esstential Graph Terms ***
        => Vertex: a node
        => Edge: connection between nodes
        => Weighted / Unweighted: values assigned to distance between vertices
        => Directed / Undirected: direction assigned to distanced between vertices.

    *** Representation of Graphs ***
        => Adjacency Matrix: Adjacency Matrix is a 2D array of size V * V where V is the number of vertices in a graph.
        => Adjacency List: Adjacency List is a one kind of Graph representation which is used an array of list 
        => Incidence Matrix / Incidence List

    *** diffrenece between Adjacency List Vs Adjacency Matrix ***

                        Adjacency List                                          Adjacency Matrix
            1. Can take up less space                             1.  Can take up more space
            2. Faster the iterate all over the edges        2. Slower the iterate over the all edges.
            3. Can to lookup slower specific edges       3. Can to lookup faster specific edges.

*/
// *** Implemented Graph Data Structure ***
// make a graph data structure
class Graph {
    constructor() {
        this.adjacency = {};
    }
    // adding a vertex or node
    addVertix(vertix) {
        // write a method called addVertix, which accepts a name of vertix.
        // checking vertix is already has or not, if not add empty array
        if (!this.adjacency[vertix]) {
            // it should add a key to the adjacency list with the name of the vertix and set its value to be an empty array.
            this.adjacency[vertix] = [];
        }
    }
    // adding edges
    // create a function which accepts two vertices, we can call them vertix1 and vertix2
    addEdge(vertix1, vertix2) {
        // if the function should find in the adjacency list the key of vertix and push vertix2 to the array
        if (this.adjacency[vertix1] && this.adjacency[vertix2]) {
            this.adjacency[vertix1].push(vertix2);
            this.adjacency[vertix2].push(vertix1);
        }
    }
    // removing an edges
    // write a function which accepts two vertices, we will call them vertix1, vertix2
    removeEdge(vertix1, vertix2) {
        // reassign the key of vertix1 to be an array that does not caontain vertix2
        this.adjacency[vertix1] = this.adjacency[vertix1].filter(
            (v) => v !== vertix2
        );

        // reassign the key of vertix2 to be an array that does not caontain vertix1
        this.adjacency[vertix2] = this.adjacency[vertix2].filter(
            (v) => v !== vertix1
        );
    }
    // removing a vertix: My Own implementation
    // function should accepts a vertix to remove
    removeVertix(vertix) {
        // looping to get all values of array use of key like vertix
        Object.values(this.adjacency).forEach((v) => {
            // lopping through indivisual array based on key obect
            for (let i = 0; i < v.length; i++) {
                // checking if the same of the name vertix into array
                if (vertix === v[i]) {
                    // if the same, delete
                    v.splice(i, 1);
                }
            }
        });
        // delete vertix
        delete this.adjacency[vertix];
        // return whole object
        return this.adjacency;
    }
    // removeVertix(vertix) {
    //     // loop as long as there are any other vertices in the adjacency list for that vertex
    //     while(this.adjacency[vertix].length){
    //         // inside of the loop, call our removeEdge function with the vertiex we are removing and any values in the adjacency list for that vertex
    //         const adjacencyVertix = this.adjacency[vertix].pop();
    //         this.removeEdge(vertix,adjacencyVertix)
    //     }
        
    //     // delete the key in the adjacency list for that vertex.
    //     delete this.adjacency[vertix];
    //     // return whole object
    //     return this.adjacency;
    // }
}
const graph = new Graph();
graph.addVertix("Tokoy");
graph.addVertix("Dallas");
graph.addVertix("Alpas");
graph.addEdge("Tokoy", "Dallas");
graph.addEdge("Tokoy", "Alpas");
console.log(graph.removeVertix("Dallas"))
