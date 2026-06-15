/**
 * @param {number} N
 * @returns {void}
 */
class Solution {
    printNos(n) {
        
        if(n<=0) return;
       
      // code here
      process.stdout.write(n + " ");
      
      return this.printNos(n-1);
        
    }
}
