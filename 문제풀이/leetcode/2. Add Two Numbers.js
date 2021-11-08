/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum;
  let val;
  let carry = 0;
  let root, head;
  root = head = new ListNode(0);

  while (l1 || l2 || carry > 0) {
    sum = 0;
    // 두 입력값의 합 계산
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    // 전가산기(full-adder)
    val = (sum + carry) % 10;
    carry = Math.floor((sum + carry) / 10);
    head.next = new ListNode(val);
    head = head.next;
  }

  return root.next;
};

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(list1, list2));
