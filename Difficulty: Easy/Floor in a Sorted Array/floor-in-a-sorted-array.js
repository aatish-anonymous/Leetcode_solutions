// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {

    findFloor(arr, x) {
        // your code here
        let ans = -1;
        
        for(let i= 0; i<arr.length; i++){
            if(arr[i]<=x){
                ans = i;
            }
        } 
        return ans;
    }
}