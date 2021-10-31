// 인접 행렬
class AdcacencyMatrix {
  constructor(v, type) {
    this.graph = Array.from({ length: v }, () => Array.from({ length: v }, () => -1));
    // 방향성 (Directed, Undirected)
    this.type = type;
  }

  connect(from, to, weight) {
    this.graph[from][to] = weight;
    if (this.type === 'undirected') {
      this.graph[to][from] = weight;
    }
  }

  print() {
    this.graph.forEach((adj, from) => {
      process.stdout.write(`${from}: `);
      adj.forEach((w, to) => (w !== -1 ? process.stdout.write(`[${to}, ${w}] `) : null));
      console.log();
    });
  }
}

// 인접 리스트
class AdcacencyList {
  constructor(v) {
    // 동일하게 배열을 사용하지만, 실제 연결 관계만 담음
    this.graph = Array.from({ length: v }, () => []);
  }

  connect(from, to, weight) {
    this.graph[from].push([to, weight]);
  }

  print() {
    this.graph.forEach((adj, from) => {
      process.stdout.write(`${from}: `);
      console.log(adj);
    });
  }
}

const matrix = new AdcacencyMatrix(5, 'undirected');
// 0번 정점과 4번 정점을 1의 가중치로 연결
matrix.connect(0, 4, 1);
// 0번 정점과 4번 정점을 7의 가중치로 연결
matrix.connect(2, 4, 7);
matrix.print();

// const list = new AdcacencyList(5);
// list.connect(0, 1, 1);
// list.connect(0, 2, 1);
// list.connect(0, 3, 1);
// list.connect(0, 4, 1);
// list.connect(1, 3, 1);
// list.connect(2, 4, 1);
// list.print();
