/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    gcd(a, b) {
        // code here
        
        return b===0 ? a : this.gcd(b,a%b);
        
        
        //Now we follow the recursive Approch (this approch is also not work coz of deep recursivvvve call)
        // Segmentation Fault (SIGSEGV)=Using subtraction repeatedly
        
        // if(a===0) return b;
        
        // if(b===0) return a;
        
        // if(a>b){
        //     if(a%b === 0) return b;
        //     return this.gcd(a-b,b);
        // }else{
        //     if(b%a === 0) return a;
        //     return this.gcd(a, b-a);
        // }
        
        
    //     //what if one of them are == 0, So just return the max value ;
    //   if(a===0 || b===0) return Math.max(a,b);
      
    //   //store minimum value amongst of two digit 
    //   let minValue =  Math.min(a,b) ;
      
      
    //   while(minValue > 0){
    //       //if our if condition hits just jump out from the loop othewise minValue decrease each iteration 
          
    //       if(a%minValue === 0 &&  b%minValue === 0){
    //           break ;
    //       }
    //       //dcrese minValue
    //       minValue--
    //   }
      
    //   //here we return GCDE Value
    //   return minValue;
    }
}