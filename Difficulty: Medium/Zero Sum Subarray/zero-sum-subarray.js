/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    subArrayExists(arr) {
        // code here
        let sumMap =  new Map();
        
        let length = arr.length;
        
        let sum  = 0; 
        
        for(let i=0; i<length; i++){
            
            sum += arr[i];
            
            if(sum == 0 || sumMap.has(sum) == true) return true;
            
            sumMap.set(sum,true);
            
        }
        return false;
    }
}