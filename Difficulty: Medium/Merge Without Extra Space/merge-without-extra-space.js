/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {void}
 */
class Solution {
    mergeArrays(a, b) {
        // code here
        let n = a.length;
        let m = b.length; 
        let merged  = [] ;
        for(let i=0; i<n; i++){
           merged.push(a[i]) ;
        }
        
        for(let j=0; j<m; j++){
            merged.push(b[j])
        }
        
           merged.sort((a,b) => a - b);
       
         
 // ✅ copy back to a
        for (let i = 0; i < n; i++) {
            a[i] = merged[i];
        }

        // ✅ copy back to b
        for (let j = 0; j < m; j++) {
            b[j] = merged[n + j];
        }

    }
}