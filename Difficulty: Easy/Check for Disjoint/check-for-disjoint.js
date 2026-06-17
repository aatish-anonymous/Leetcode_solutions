

    // User function Template for javascript
    /**
     * @param {number[]} a
     * @param {number[]} b
     * @returns {boolean}
     */

    class Solution {
    // Function to check if two arrays are disjoint
    areDisjoint(a, b) {
        // your code here
        let setA = new Set(a);
        
        for(let num of b){
            if(setA.has(num)){
                return false;
            }
        }
        return true;
        
        
        // for(let  i=0; i<a.length; i++){
        //     for(let j=0; j<b.length; j++){
        //         if(a[i] === b[j]){
        //             return false
        //         }
        //     }
        // }
        // return true;
    }
}