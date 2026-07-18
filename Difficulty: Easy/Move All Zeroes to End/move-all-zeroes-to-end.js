/**
 * @param {Number[]} arr
 * @returns {void}
 */

class Solution {
    pushZerosToEnd(arr) {
        // code here
        //we are modifiying original Array that why no need of return ... 
        
    let count = 0
        
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== 0){
            arr[count] = arr[i];
            count++
            }
        }
        
        while(count < arr.length){
            arr[count] = 0;
            
            count++
        }
        
        
    //     let last  = arr.length;
    //     let first = 0;
    //     let result  = []
    //     for(let i=0; i<arr.length; i++){
    //         while(first<last){
    //              if(arr[i] === 0){
    //             result.push(arr[last]);
    //             last--
    //         }else{
    //             result.push(arr[first])
    //             first++
    //         }
    //     }
    //   }
    //   return result;
    }
}