/*
Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* No linked List solution
 var addTwoNumbers = function(l1, l2) {
    let interations = l1.length > l2.length ? l1.length: l2.length
    let result = []
    let carry = 0
    for(let index = 0 ; index < interations || carry != 0; index++){
        let firstElement = 0
        let secondElement = 0
        if(l1[index])
            firstElement = l1[index]
        if(l2[index])
            secondElement = l2[index]
        let sum = carry + firstElement + secondElement
        carry = 0;
        let sumAsAString = sum.ToString()
        if(sumAsAString.length > 1){
            carry = Number(sumAsAString.charAt(0))
        }
        result.unshift(sumAsAString.charAt(1))
    }
    return result;
};*/
var addTwoNumbers = function(l1, l2) {
    
    let result = new ListNode(undefined,undefined)

    const generateNodeList = (firstNode, secondNode, carry, result) =>{
            let firstElement = firstNode ? firstNode.val : 0
            let secondElement = secondNode ? secondNode.val : 0
            let sum = carry + firstElement + secondElement
            carry = 0;
            let sumAsAString = sum.toString()
            console.log({firstElement},{secondElement},{sumAsAString})
        
            if(sumAsAString.length > 1){
                carry = Number(sumAsAString.charAt(0))
            }
            result.val = Number(sumAsAString.slice(-1))
            if( (firstNode && firstNode.next) || (secondNode && secondNode.next) || carry != 0)
                result.next = generateNodeList(firstNode ? firstNode.next : undefined, secondNode ? secondNode.next : undefined, carry, new ListNode(undefined,undefined) )
        
            return result

    }
    return generateNodeList(l1,l2,0,result)

};

