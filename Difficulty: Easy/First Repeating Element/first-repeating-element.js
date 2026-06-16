/**
 * @param {number[2,4,6,8,7,3,8]} arr
 * @returns {number}
 */
class Solution {
    firstRepeated(arr) {
        // code here
        for(let i=0; i<arr.length; i++ ){
            
            for(let j=i+1; j<arr.length; j++){
                if(arr[i]===arr[j]){
                    return i+1;
                }
            }
            
        }
        return -1
    }
}