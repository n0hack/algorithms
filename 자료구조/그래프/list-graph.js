function Vertex(data) {
  this.index = -1;
  this.data = data;
  this.visited = false;
  this.adjacency = null;
  this.next = null;
}

function Edge(from, to, weight) {
  this.from = from;
  this.to = to;
  this.weight = weight;
  this.next = null;
}

function Graph() {
  this.vertices = null;
  this.count = 0;
}

Graph.prototype.addVertex = function (v) {
  let vertexList = this.vertices;
  if (vertexList === null) {
    this.vertices = v;
  } else {
    while (vertexList.next !== null) {
      vertexList = vertexList.next;
    }
    vertexList.next = v;
  }
  v.index = this.count++;
};

Graph.prototype.addEdge = function (v, e) {
  if (v.adjacency === null) {
    v.adjacency = e;
  } else {
    let adjacencyList = v.adjacency;
    while (adjacencyList.next !== null) {
      adjacencyList = adjacencyList.next;
    }
    adjacencyList.next = e;
  }
};

Graph.prototype.print = function () {
  if (this.vertices === null) return;

  let v = this.vertices;
  while (v !== null) {
    process.stdout.write(`${v.data}: `);

    let e = v.adjacency;
    while (e !== null) {
      process.stdout.write(`${e.to.data}[${e.weight}] `);
      e = e.next;
    }
    v = v.next;
    console.log();
  }
};

const graph = new Graph();
const V1 = new Vertex('1');
const V2 = new Vertex('2');
const V3 = new Vertex('3');
const V4 = new Vertex('4');
const V5 = new Vertex('5');

// 정점 연결
graph.addVertex(V1);
graph.addVertex(V2);
graph.addVertex(V3);
graph.addVertex(V4);
graph.addVertex(V5);

// 간선 연결
graph.addEdge(V1, new Edge(V1, V2, 0));
graph.addEdge(V1, new Edge(V1, V3, 0));
graph.addEdge(V1, new Edge(V1, V4, 0));
graph.addEdge(V1, new Edge(V1, V5, 0));

graph.addEdge(V2, new Edge(V2, V1, 0));
graph.addEdge(V2, new Edge(V2, V3, 0));
graph.addEdge(V2, new Edge(V2, V5, 0));

graph.addEdge(V3, new Edge(V3, V1, 0));
graph.addEdge(V3, new Edge(V3, V2, 0));

graph.addEdge(V4, new Edge(V4, V1, 0));
graph.addEdge(V4, new Edge(V4, V5, 0));

graph.addEdge(V5, new Edge(V5, V1, 0));
graph.addEdge(V5, new Edge(V5, V2, 0));
graph.addEdge(V5, new Edge(V5, V4, 0));

// 그래프 출력
graph.print();
