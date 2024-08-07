"use strict";
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    // add vertex
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    //remove vertex
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.delete(vertex);
        }
    }
    //add edge
    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }
    //remove edge
    //get vertices
    getVertices() {
        if (this.adjacencyList.size !== 0) {
            return Array.from(this.adjacencyList.keys());
        }
    }
    //get vertexCount
    getVertexCount() {
        if (this.adjacencyList.size !== 0) {
            return Array.from(this.adjacencyList.keys()).length;
        }
    }
    // isAdjacent
    //get edgeCount
    //get Edges
    getEdges() {
        const edges = [];
        for (const [vertex1, neighbours] of this.adjacencyList.entries()) {
            for (const vertex2 of neighbours) {
                if (vertex1 < vertex2) {
                    edges.push([vertex1, vertex2]);
                }
            }
        }
        return edges;
    }
}
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
console.log("Vertices: " + graph.getVertices());
console.log("Edges: " + graph.getEdges().map((edge) => `(${edge[0]}, ${edge[1]})`).join(" "));
console.log("total Vertices: " + graph.getVertexCount());
