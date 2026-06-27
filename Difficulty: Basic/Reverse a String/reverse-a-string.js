/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        let reverse = '';
        for(let i=s.length-1; i>=0; i--){
            reverse += s[i]
        }
        return reverse;
    }
}