/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (!head) return null;

  let odd = head;
  let even = head.next;
  const evenHead = head.next;

  while (even && even.next) {
    [odd.next, even.next] = [odd.next.next, even.next.next];
    [odd, even] = [odd.next, even.next];
  }
  odd.next = evenHead;
  return head;
};
