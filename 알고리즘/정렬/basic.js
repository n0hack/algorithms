const arr = [17, 5, 9, 0, 3, 11, 6, 2, 4, 8];
const arr2 = ['가1나다', '가2니다', '가1너다'];

// 자바스크립트의 정렬은 문자를 기준으로 함
arr.sort((a, b) => a - b);
console.log(arr);

arr2.sort();
console.log(arr2);
