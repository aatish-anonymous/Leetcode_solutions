/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
class Solution {
    twoSum(arr, target) {
        // code here
        
        // current value +  need value? = target, we can short out above problem like this 
        // target - current value  = need value we find right  ?
        
        let memory  = {}
        
        for(let i=0; i<arr.length; i++){
            let neededValue = target - arr[i];
            if(memory[neededValue] !== undefined){
                return true;
                // return [memory[neededValue], i];
            }
            
            memory[arr[i]] = true;
            
            // memory[arr[i]] = i
            // memory.set(arr[i],i);
        }
        
          return false 
        
        // let seen = new Set();
        // for(let num of arr){
        //     let complement  = target - num;
            
        //     if(seen.has(complement)){
        //         return true;
        //     }
        //     seen.add(num);
        // }
        // return false;
        
//  for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;

        
    }
}