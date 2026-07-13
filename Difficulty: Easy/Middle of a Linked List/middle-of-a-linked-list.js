/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
} */

/**
 * @param {Node} head
 * @return {number}
 */

class Solution {
    getMiddle(head) {
        // code here
        let count = 0 ;
        let current  = head;
        
        while (current !== null){
            count++;
            
            current = current.next ;
        }
       
       let middle = Math.floor(count/2);
       
       current = head;
       
       for(let i=0; i<middle; i++){
           current = current.next;
       }
       
       return current.data;
    }
}