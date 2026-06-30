/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    isPalindrome(s) {
        // code here
       let word  = s;
       let revStr = '';
       
       for(let i=s.length-1; i>=0; i--){
          revStr += s[i];
       }
       if(revStr === word){
           return true;
       }else{
           return false;
       }
    }
}
