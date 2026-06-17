/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    isBinary(s) {
        // code here
        for(let i=0; i<s.length; i++){
            if(s[i] !== '0' && s[i] !== '1'){
                return false;
            }
        }
        return true ;
    }
}