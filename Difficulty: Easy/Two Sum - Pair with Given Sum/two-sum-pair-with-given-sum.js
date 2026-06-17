/**
 * @param {number[]} arr
 * @param {number} target
 * @return {boolean}
 */
class Solution {
    twoSum(arr, target) {
        // code here
        
        let seen = new Set();
        for(let num of arr){
            let complement  = target - num;
            
            if(seen.has(complement)){
                return true;
            }
            seen.add(num);
        }
        return false;
        
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