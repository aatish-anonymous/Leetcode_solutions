
class Solution {
    /**
    * @param number n

    * @returns number
    */
    nthTribonacci(n) {
        // code here
        if(n===0) return 0;
        if(n===1) return 1;
        if(n===2) return 1;
        
        let a = 0;
        let b = 1; 
        let c = 1;
        
        for(let i=0; i<n; i++){
            let curr  = a+b+c;
            a=b;
            b=c;
            c=curr;
        }
        
        return a ;
      
    }
}
