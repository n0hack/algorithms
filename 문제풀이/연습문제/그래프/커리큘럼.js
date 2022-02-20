const n = 5;
const input = [
  // 강의 시간, 선수 강의
  [10, -1],
  [10, 1, -1],
  [4, 1, -1],
  [4, 3, 1, -1],
  [3, 3, -1],
];

const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array.from({ length: n + 1 }, () => 0);
const time = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i <= n; i++) {
  const data = input[i - 1];
  time[i] = data[0];
  for (let j = 1; j < data.length - 1; j++) {
    indegree[i]++;
    graph[data[j]].push(i);
  }
}

const topologySort = () => {
  const queue = [];

  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length !== 0) {
    const now = queue.shift();
    for (const v of graph[now]) {
      time[v] = Math.max(time[v], time[now] + time[v]);
      indegree[v]--;
      if (indegree[v] === 0) queue.push(v);
    }
  }

  console.log(time);
};
topologySort();
