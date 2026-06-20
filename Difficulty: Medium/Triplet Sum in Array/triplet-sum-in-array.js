/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
    hasTripletSum(arr, target) {
        // code here
        let n = arr.length ;
        
        for(let i=0; i<n-2; i++){
            //  Because each i is a new problem
                let setStore = new Set();
            for(let j=i+1; j<n; j++){
               let requiredNum = target-arr[i]-arr[j];
               
               if(setStore.has(requiredNum)){
                   return true;
               }
               setStore.add(arr[j]);
            }
        }
        return false;
        
        
        
        //we have an array and need to three element whoes sum == target 
        // a + b + c = target , Simply wit requiredSum(a+b) = target-c  right ?
        
        // let n =  arr.length;
        
        //loop we run arr length-2  ? 
        
        // for(let i=0; i<n-2; i++){
        //     let leftPointer  = i+1;
        //     let rightPointer = n-1;
            
        //     let requiredSum = target-arr[i];
            
        //     while(leftPointer < rightPointer){
        //     if(arr[leftPointer] + arr[rightPointer]== requiredSum){
        //         return true;
        //     }
            
        //     if(arr[leftPointer] + arr[rightPointer]<requiredSum){
        //         leftPointer++
        //     }else if(arr[leftPointer] + arr[rightPointer]<requiredSum){
        //         rightPointer--
        //     }
        //   }
        // }
        // return false;
        
        // Output :  time limit exceeded
    }
}