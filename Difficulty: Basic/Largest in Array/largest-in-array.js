
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr){
        
    let larger = arr[0];
    
    for (let i=1; i<=arr.length; i++){
        if(arr[i]>larger){
            larger = arr[i];
        }
        
       }
    return larger;
   }
   
}
  
  
  