// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {

    findMaximum(arr) {
        // your code here
       let max = arr[0];
       
       for(let i=1; i<arr.length; i++){
           if(arr[i]>max){
               max = arr[i];
       }
      }
      return max;
    }
    
}