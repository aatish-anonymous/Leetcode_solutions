// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
        let mapStore = new Map();
        let sum  = 0;
        let maxLen = 0;
        
      for(let i=0; i<arr.length; i++){
           
           sum  += arr[i];
           
           if(sum == k) { 
               maxLen  =  i+1;
      }
      
      if(mapStore.has(sum-k)){
          let len =  i-mapStore.get(sum-k);
          maxLen  = Math.max(maxLen, len)
      }
      
      //Inside store if sum not alresy present 
      if(!mapStore.has(sum)){
          mapStore.set(sum,i)
      }
    }
    return maxLen ;
  }
}
