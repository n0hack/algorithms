class AdjacencyMatrixGraph {
  constructor(size, type) {
    this.graph = Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => (i === j ? 0 : -1)));
    this.type = type;
  }

  connect(from, to, weight) {
    this.graph[from][to] = weight;
    if (this.type === 'undirected') {
      this.graph[to][from] = weight;
    }
  }

  print() {}
}

class AdjacencyListGraph {
  constructor(size, type) {
    // 동일하게 배열을 사용하지만, 실제 연결 관계만 담음
    this.graph = Array.from({ length: size }, () => []);
    this.type = type;
  }

  connect(from, to, weight) {
    this.graph[from].push([to, weight]);
    if (this.type === 'undirected') {
      this.graph[to].push([from, weight]);
    }
  }
}

const adjMatrix = new AdjacencyMatrixGraph(3, 'undirected');
adjMatrix.connect(0, 1, 7);
adjMatrix.connect(0, 2, 5);
console.log(adjMatrix);

const adjList = new AdjacencyListGraph(3, 'undirected');
adjList.connect(0, 1, 7);
adjList.connect(0, 2, 5);
console.log(adjList.graph);
