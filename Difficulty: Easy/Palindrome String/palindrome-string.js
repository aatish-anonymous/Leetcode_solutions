/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    isPalindrome(s) {
        // code here
        let reverse = s.split('').reverse().join('');
        
        if(reverse === s ) {
            return true;
        }else{
            return false ;
        }
    }
}
