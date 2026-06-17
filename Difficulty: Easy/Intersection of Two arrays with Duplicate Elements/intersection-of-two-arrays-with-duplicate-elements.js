/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    intersect(a, b) {
        // code here
        
        let setA = new Set(a);
        
        let result = [];
        
        for(let num of b){
            if(setA.has(num)){
                result.push(num);
                setA.delete(num);
            }
         
        }
        return result;
        
    //   let result = [] ;
      
    //   for(let i=0; i<a.length; i++){
    //       for(let j=0; i<b.length; j++){
    //           if(a[i] === b[j]){
    //               result.push(a[i]);
    //           }
    //       }
    //   }
    //   return result;
    }
}