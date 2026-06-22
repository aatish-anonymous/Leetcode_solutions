/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    nthFibonacci(n) {
        // your code here
        if(n===0) return  0;
        if(n===1) return 1 ;
        
        let prev  = 0;
        let next  = 1;
        
        for(let i=0; i<n; i++){
            let curr = prev + next;
             prev = next;
             next = curr;
        }
        
        return prev
    }
}