// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        // return s.split("").reverse().join("");
        
        let reversed = "";
        
        for(let i=s.length-1; i>=0; i--){
            reversed += s[i];
        }
        
       return reversed;
    }
}