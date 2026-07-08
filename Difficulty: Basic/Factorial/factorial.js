/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        if(n===0||n===1) return 1
        // code here
        return n*this.factorial(n-1);
    }
}
