/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findDuplicates(arr) {
        // code here
        let result = [];
         arr.sort((a,b)=>a-b);
        
      for(let i=0; i<arr.length; i++){
       if(arr[i]== arr[i+1]){
           result.push(arr[i]);
       }
      }
     
      
      return result;
      
    //   for(let i=0; i<arr.length; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i]==arr[j]){
    //             result.push(arr[i])
    //         }
    //     }
    //   }
    //   result.sort((a,b)=>a-b);
      
    //   return result;
    }
}