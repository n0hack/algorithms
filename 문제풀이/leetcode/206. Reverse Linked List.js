/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;
  let prev = null;
  let next;

  while (node !== null) {
    [next, node.next] = [node.next, prev];
    [prev, node] = [node, next];
  }

  return prev;
};

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
