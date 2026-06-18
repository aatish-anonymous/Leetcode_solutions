// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
class Solution {
    // Function to check whether there is a subarray present with 0-sum or not.
    subArrayExists(arr) {
        // code here
        
        
     let sum  = 0 ;
     
     let set = new Set() ;
     
     for(let num of arr){
         sum += num;
         
         if(sum ===0 || set.has(sum)){
             return true;
         }
         set.add(sum);
     }
        
        
        
        
        
        // for(let i=0; i<arr.length; i++){
        //      let sum = 0;
        //     for(let j=i; j<arr.length; j++) {
        //         sum += arr[j]; 
        //         if(sum === 0 ) {
        //             return true;
        //         }
        //     }
        // }
        // return false
    }
}