/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {

    findMaximum(arr) {
        // your code here
         let low = 0 ;
         let high = arr.length-1; 
         
         //condition 
         while(low<high){
             
             // find the mid element 
             let mid  =  Math.floor((low+high)/2);
             
             //contion for prevent breaking our code like means what-if our mid is less than 0
             
             let left  = (mid>0) ? arr[mid-1] : -Infinity;
             let right  = (mid < arr.length-1) ? arr[mid+1] : -Infinity;
             
             //if our mid is greater than left and right means element we found
            if(arr[mid]>left && arr[mid]>right){
                return arr[mid];
            }
            
            //move to increasing side 
            else if (arr[mid] < right ){
                low = mid + 1 ;
            }else{
                high= mid-1
            }
             
         }
         
         return arr[low] ;
    }
}