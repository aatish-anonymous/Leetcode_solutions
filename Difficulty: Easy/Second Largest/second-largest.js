class Solution {
    getSecondLargest(arr) {
        // code here
        let  n  = arr.length ;
        //base case 
        if(n<2) return -1 ;
    
        // find first of largest Element of the array 
        let largest =  arr[0];
        for(let i=1; i<n; i++){
            if(arr[i]>largest){
                largest = arr[i];
            }
        }
        
        //logic for finding Second largest number 
        let secondLargest  = -1;
        
        for(let i=0; i<n; i++){
            if(arr[i] !== largest){
                if(secondLargest===-1 || arr[i]>secondLargest){
                    secondLargest = arr[i]
                }
            }
        }
        
        
     return secondLargest;
    }
}