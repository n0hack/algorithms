const solution = (participant, completion) => {
  const obj = {};
  participant.forEach((p) => {
    if (p in obj) obj[p] += 1;
    else obj[p] = 1;
  });
  completion.forEach((c) => {
    obj[c] -= 1;
    if (obj[c] === 0) delete obj[c];
  });
  return Object.keys(obj).join("");
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
