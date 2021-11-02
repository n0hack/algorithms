const dfs = (v) => {
  v.visited = true;
  process.stdout.write(`${v.data} `);

  let e = v.adjacencyList;
  while (e !== null) {
    if (e.target !== null && !e.target.visited) dfs(e.target);
    e = e.next;
  }
};

function bfs(v) {
  const queue = [];

  v.visited = true;
  process.stdout.write(`${v.data} `);
  queue.push(v);
  while (queue.length > 0) {
    let popped = queue.shift();
    let v = popped;
    let e = popped.adjacencyList;

    while (e !== null) {
      v = e.target;
      if (v !== null && !v.visited) {
        process.stdout.write(`${v.data} `);
        v.visited = true;
        queue.push(v);
      }
      e = e.next;
    }
  }
}

class Vertex {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.adjacencyList = null;
    this.visited = false;
    this.index = -1;
  }
}

class Edge {
  constructor(from, target, weight) {
    this.weight = weight;
    this.from = from;
    this.target = target;
    this.next = null;
  }
}

class Graph {
  constructor() {
    this.vertices = null;
    this.vertexCount = 0;
  }

  addVertex(v) {
    let vertexList = this.vertices;

    if (vertexList === null) {
      this.vertices = v;
    } else {
      while (vertexList.next !== null) {
        vertexList = vertexList.next;
      }
      vertexList.next = v;
    }
    v.index = this.vertexCount++;
  }

  addEdge(v, e) {
    if (v.adjacencyList === null) {
      v.adjacencyList = e;
    } else {
      let adjacencyList = v.adjacencyList;
      while (adjacencyList.next !== null) {
        adjacencyList = adjacencyList.next;
      }
      adjacencyList.next = e;
    }
  }

  printGraph() {
    let v = this.vertices;

    if (this.vertices === null) return;

    while (v !== null) {
      process.stdout.write(`Vertex[${v.data}]: `);

      let e = v.adjacencyList;
      if (e !== null) {
        while (e !== null) {
          process.stdout.write(`${e.target.data}[${e.weight}] `);
          e = e.next;
        }
      }
      v = v.next;
      console.log();
    }
  }
}

const graph = new Graph();
const v1 = new Vertex('1');
const v2 = new Vertex('2');
const v3 = new Vertex('3');
const v4 = new Vertex('4');
const v5 = new Vertex('5');
const v6 = new Vertex('6');
const v7 = new Vertex('7');

graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);
graph.addVertex(v6);
graph.addVertex(v7);

graph.addEdge(v1, new Edge(v1, v2, 0));
graph.addEdge(v1, new Edge(v1, v3, 0));

graph.addEdge(v2, new Edge(v2, v4, 0));
graph.addEdge(v2, new Edge(v2, v5, 0));

graph.addEdge(v3, new Edge(v3, v4, 0));
graph.addEdge(v3, new Edge(v3, v6, 0));

graph.addEdge(v4, new Edge(v4, v5, 0));
graph.addEdge(v4, new Edge(v4, v7, 0));

graph.addEdge(v5, new Edge(v5, v7, 0));

graph.addEdge(v6, new Edge(v6, v7, 0));

dfs(v1);
console.log();

bfs(v1);
console.log();
