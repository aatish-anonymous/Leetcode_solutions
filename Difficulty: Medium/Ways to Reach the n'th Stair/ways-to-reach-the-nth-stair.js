class Solution {
    countWays(n) {
        // code here
        if(n===1) return 1 ;
        if(n===0) return 1
        
        let prev = 1;
        let next = 1;
        
        for(let i=2; i<=n; i++){
             let curr = prev + next ; 
             prev=next;
             next = curr
        }
        
        return next;
    }
}