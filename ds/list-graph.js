const mode = {
  VISITED: Symbol.for('VISITED'),
  NOT_VISITED: Symbol.for('NOT_VISITED'),
};

class Vertex {
  constructor(data) {
    this.data = data;
    this.visited = mode.NOT_VISITED;
    this.index = -1;
    this.next = null;
    this.adjacencyList = null;
  }
}

class Edge {
  constructor(from, target, weight) {
    this.weight = weight;
    this.next = null;
    this.from = from;
    this.target = target;
  }
}

class Graph {
  constructor() {
    this.vertices = null;
    this.vertexCount = 0;
  }

  addVertex(v) {
    let vertexList = this.vertices;

    // 링크드 리스트처럼 처리
    if (vertexList === null) {
      this.vertices = v;
    } else {
      while (vertexList.next !== null) {
        vertexList = vertexList.next;
      }
      vertexList.next = v;
    }
    this.vertexCount += 1;
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

  print() {
    let v = this.vertices;
    let e = null;

    while (v !== null) {
      process.stdout.write(`${v.data}: `);

      e = v.adjacencyList;
      if (e === null) {
        v = v.next;
        process.stdout.write('\n');
        continue;
      }

      while (e !== null) {
        process.stdout.write(`${e.target.data}[${e.weight}] `);
        e = e.next;
      }

      v = v.next;
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
  }
}

const graph = new Graph();
const v1 = new Vertex('1');
const v2 = new Vertex('2');
const v3 = new Vertex('3');
const v4 = new Vertex('4');
const v5 = new Vertex('5');

// 정점 추가
graph.addVertex(v1);
graph.addVertex(v2);
graph.addVertex(v3);
graph.addVertex(v4);
graph.addVertex(v5);

// 간선 연결
graph.addEdge(v1, new Edge(v1, v2, 0));
graph.addEdge(v1, new Edge(v1, v3, 0));
graph.addEdge(v1, new Edge(v1, v4, 0));
graph.addEdge(v1, new Edge(v1, v5, 0));

graph.addEdge(v2, new Edge(v2, v1, 0));
graph.addEdge(v2, new Edge(v2, v3, 0));
graph.addEdge(v2, new Edge(v2, v5, 0));

graph.addEdge(v3, new Edge(v3, v1, 0));
graph.addEdge(v3, new Edge(v3, v2, 0));

graph.addEdge(v4, new Edge(v4, v1, 0));
graph.addEdge(v4, new Edge(v4, v5, 0));

graph.addEdge(v5, new Edge(v5, v1, 0));
graph.addEdge(v5, new Edge(v5, v2, 0));
graph.addEdge(v5, new Edge(v5, v4, 0));

graph.print();
