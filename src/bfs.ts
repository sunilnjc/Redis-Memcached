class BFS {
  V: any;
  adjList: any;

  constructor(vertices: any) {
    this.V = vertices;
    this.adjList = new Array(vertices).fill(null).map(() => []);
  }

  addEdge(u: any, v: any) {
    console.log("adjList :: ", this.adjList);
    this.adjList[u].push(v);
    this.adjList[v].push(u);
  }

  traverse(startVertex: number) {
    const visited = new Array(this.V).fill(false);
    const queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length !== 0) {
      const currentVertex: number = queue.shift();
      console.log("currentVertex :: ", currentVertex);

      for (const neighbours of this.adjList[currentVertex]) {
        if (!visited[neighbours]) {
          visited[neighbours] = true;
          queue.push(neighbours);
        }
      }
    }
  }
}

function main() {
  const graph = new BFS(6); // Create a graph with 6 vertices

  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 4);
  graph.addEdge(3, 4);
  graph.addEdge(3, 5);

  console.log("Breadth-First Traversal starting from vertex 0:\n");
  graph.traverse(0);
}

main();
