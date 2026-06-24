/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        // code here
        if(n===0) return 1
        if(n===1) return 1
        
        let fact  = 1;
        
      for(let i=0; i<n; i++){
          fact = fact*(n-i) ;
      } 
      
      return fact ;
    //   if(n===0) return 1;
       
    //   return n*this.factorial(n-1);
    }
}
