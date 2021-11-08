/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  while (head.length) {
    if (head.pop() !== head.shift()) return false;
  }
  return true;
};

console.log(isPalindrome([1, 2, 2, 1]));
console.log(isPalindrome([1, 2]));
