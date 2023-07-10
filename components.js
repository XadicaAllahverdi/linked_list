/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    let count = 0;
    const mySet = new Set(nums);
    let flag = false;
    while (head) {

        let hasInSet = mySet.has(head.val);
        if (hasInSet && !flag) {
            count++;
        }
        flag = hasInSet;
        head = head.next;

    }
    return count;
};