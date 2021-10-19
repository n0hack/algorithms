// 정점, 간선 사용 여부를 위한 심볼
const option = Object.freeze({
  NOT_USED: Symbol.for('NOT_USED'),
  USED: Symbol.for('USED'),
});

// 그래프 방향성을 위한 심볼
const type = Object.freeze({
  UNDIRECTED: Symbol.for('UNDIRECTED'),
  DIRECTED: Symbol.for('DIRECTED'),
});

class ArrayGraph {
  maxVertexCount; // 최대 정점 개수
  currentVertexCount; // 현재 사용되는 정점 개수
  graphType; // Undirected, Directed
  adjEdge; // 간선 저장을 위한 2차원 리스트
  vertex; // 정점 저장을 위한 1차원 리스트

  // 무방향성 그래프 생성
  createUndirected(maxVertexCount) {
    if (maxVertexCount > 0) {
      this.maxVertexCount = maxVertexCount;
      this.graphType = type.UNDIRECTED;
    } else {
      throw new Error('[Error] 정점의 개수는 0보다 커야 합니다.');
    }

    // 리스트 초기화
    this.adjEdge = Array.from({ length: maxVertexCount }, () => Array.from({ length: maxVertexCount }, () => 0));
    this.vertex = Array.from({ length: maxVertexCount }, () => option.NOT_USED);
  }

  // 방향성 그래프 생성
  createDirected(maxVertexCount) {
    this.createUndirected(maxVertexCount);
    this.graphType = type.DIRECTED;
  }

  // 정점 추가
  addVertex(vertexId) {
    // vertexId 유효성 체크
    if (vertexId < this.maxVertexCount) {
      if (this.vertex[vertexId] === option.NOT_USED) {
        this.vertex[vertexId] = option.USED;
        this.currentVertexCount += 1;
      } else {
        throw new Error(`[Error] ${vertexId}은/는 이미 존재하는 정점 인덱스입니다.`);
      }
    }
  }

  // 유효 정점 체크
  checkVertexValid(vertexId) {
    if (vertexId >= this.maxVertexCount || this.vertex[vertexId] === option.NOT_USED) {
      return false;
    }
    return true;
  }

  // 간선 추가
  addEdge(fromVertexId, toVertexId) {
    this.addEdgeWithWeight(fromVertexId, toVertexId, option.USED);
  }

  // 가중치가 있는 간선 추가
  addEdgeWithWeight(fromVertexId, toVertexId, weight) {
    if (!this.checkVertexValid(fromVertexId)) {
      throw new Error(`[Error] ${fromVertexId}은/는 유효하지 않은 정점 인덱스입니다.`);
    }

    if (!this.checkVertexValid(toVertexId)) {
      throw new Error(`[Error] ${toVertexId}은/는 유효하지 않은 정점 인덱스입니다.`);
    }

    this.adjEdge[fromVertexId][toVertexId] = weight;
    // 무방향성 그래프의 경우 반대쪽도 추가
    if (this.graphType === type.UNDIRECTED) {
      this.adjEdge[toVertexId][fromVertexId] = weight;
    }
  }

  // 정점 제거
  removeVertex(vertexId) {
    if (!this.checkVertexValid(vertexId)) {
      throw new Error(`[Error] ${vertexId}은/는 유효하지 않은 정점 인덱스입니다.`);
    }
    // 정점과 연결된 모든 간선 제거
    for (let i = 0; i < this.maxVertexCount; i++) {
      this.removeEdge(vertexId, i);
      this.removeEdge(i, vertexId);
    }
    this.veretx[vertexId] = option.NOT_USED;
  }

  // 간선 제거
  removeEdge(fromVertexId, toVertexId) {
    if (!this.checkVertexValid(fromVertexId)) {
      throw new Error(`[Error] ${fromVertexId}은/는 유효하지 않은 정점 인덱스입니다.`);
    }

    if (!this.checkVertexValid(toVertexId)) {
      throw new Error(`[Error] ${toVertexId}은/는 유효하지 않은 정점 인덱스입니다.`);
    }

    this.adjEdge[fromVertexId][toVertexId] = 0;
    // 무방향성 그래프의 경우 반대쪽도 초기화
    if (this.graphType === type.UNDIRECTED) {
      this.adjEdge[toVertexId][fromVertexId] = 0;
    }
  }

  // 그래프 출력
  display() {
    for (let i = 0; i < this.adjEdge.length; i++) {
      for (let j = 0; j < this.adjEdge[i].length; j++) {
        let value = this.adjEdge[i][j];
        if (typeof value === 'symbol') {
          if (value === Symbol.for('NOT_USED')) {
            value = 0;
          } else {
            value = 1;
          }
        }
        process.stdout.write(`${value} `);
      }
      console.log();
    }
    console.log();
  }
}

// 3가지 배열 그래프 확인
const graph1 = new ArrayGraph();
const graph2 = new ArrayGraph();
const graph3 = new ArrayGraph();

graph1.createUndirected(6);
graph2.createDirected(6);
graph3.createDirected(6);

// 그래프에 정점 추가
for (let i = 0; i < 6; i++) {
  graph1.addVertex(i);
  graph2.addVertex(i);
  graph3.addVertex(i);
}

// 그래프에 간선 추가
graph1.addEdge(0, 1);
graph1.addEdge(0, 2);
graph1.addEdge(1, 2);
graph1.addEdge(2, 3);
graph1.addEdge(3, 4);
graph1.addEdge(3, 5);
graph1.addEdge(4, 5);

graph2.addEdge(0, 1);
graph2.addEdge(2, 0);
graph2.addEdge(2, 1);
graph2.addEdge(2, 3);
graph2.addEdge(3, 2);
graph2.addEdge(3, 4);
graph2.addEdge(4, 5);
graph2.addEdge(5, 3);

graph3.addEdgeWithWeight(0, 1, 4);
graph3.addEdgeWithWeight(1, 2, 1);
graph3.addEdgeWithWeight(2, 0, 2);
graph3.addEdgeWithWeight(2, 1, 3);
graph3.addEdgeWithWeight(2, 3, 2);
graph3.addEdgeWithWeight(3, 2, 1);
graph3.addEdgeWithWeight(3, 4, 1);
graph3.addEdgeWithWeight(4, 5, 1);
graph3.addEdgeWithWeight(5, 3, 2);

// 그래프 출력
console.log('Graph 1: ');
graph1.display();
console.log('Graph 2: ');
graph2.display();
console.log('Graph 3: ');
graph3.display();
