const solution = (new_id) => {
  // [1] 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();
  // [2] 알파벳, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
  new_id = new_id.replace(/[^0-9a-z._-]/g, '');
  // [3] 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표로 치환
  new_id = new_id.replace(/[.]{2,}/g, '.');
  // [4] 마침표(.)가 처음이나 끝에 위치한다면 제거
  new_id = new_id.replace(/(^[.])|([.]$)/g, '');
  // [5] 빈 문자열이라면, 문자 'a'를 대입
  if (new_id.length === 0) new_id = 'a';
  // [6-1] 길이가 16자 이상이라면, 첫 15개의 문자를 제외하고 제거
  // [6-2] 제거 후 마침표(.)가 마지막이라면 제거
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(/(^[.])|([.]$)/g, '');
  }
  // [7] 아이디의 길이가 2 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 붙임
  if (new_id.length <= 2) {
    new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
  }
  return new_id;
};

const inputs = ['...!@BaT#*..y.abcdefghijklm', 'z-+.^.', '=.=', '123_.def', 'abcdefghijklmn.p'];
inputs.forEach((input) => console.log(solution(input)));
