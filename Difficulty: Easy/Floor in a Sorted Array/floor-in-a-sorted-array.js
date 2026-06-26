/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {

    findFloor(arr, x) {
        // your code here
        //We need to follow the binary search approch  ..
        
        let low = 0 ;
        let high  = arr.length-1;
        
        let ans = -1;
        
        while(low<=high){
            
              let mid = Math.floor((low+high)/2);
              
            if(arr[mid]<=x){
                ans = mid  // answer store inside ans
                low = mid + 1;  //move right for check last occurence 
            }else{
                high= mid-1; // move left 
            }
        }
       return ans ;
    }
}