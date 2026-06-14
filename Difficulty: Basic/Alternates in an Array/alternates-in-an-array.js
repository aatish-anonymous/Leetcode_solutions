/**
 * @param {number[]} arr
 */

class Solution {
    getAlternates(arr) {
        // code here
        let storeAlternate = []; 
        for(let i=0; i<arr.length; i+=2){
            //   storeAlternate = arr[i];
            storeAlternate.push(arr[i])
        }
        
        return storeAlternate;
        
    //   let result  = [];
    
    //   for(let i=0; i<arr.length; i++){
    //      if(i%2 === 0){
    //           result.push(arr[i])
    //      }
    //   }
    //   return result;
  
    }
}