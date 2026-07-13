/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseList(head) {
        // code here
        let current  = head;
        
        let previous = null;
        
        while(current !== null){
           let nextNode = current.next;
           
           current.next = previous;
           
           previous = current;
           current = nextNode;
           
        }
        
        return previous;
    }
}