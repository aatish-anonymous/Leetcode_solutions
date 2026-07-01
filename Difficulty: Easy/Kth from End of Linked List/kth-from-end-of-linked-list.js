/* Node Structure
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
} */

class Solution {
    getKthFromLast(head, k) {
        // code here
        let slow = head;
        let fast = head;
        
        for(let i = 0; i < k; i++){
            if(fast === null){
                return -1;
            }
            fast = fast.next;
        }
        while(fast !== null){
            slow = slow.next;
            fast = fast.next;
        }
        return slow.data;
    }
}