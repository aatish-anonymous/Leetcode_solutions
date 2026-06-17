/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        
        
    let set = new Set();
    
    for(let num of a){
        set.add(num);
    }
    for(let num of b){
        set.add(num);
    }
    
    return Array.from(set).sort((x,y) =>x-y)
        
    // let result = [];
    
    // for(let i=0; i<a.length; i++){
    //     if(!result.includes(a[i])){
    //         result.push(a[i])
    //     }
    // }
    
    // for(let i=0; i<b.length; i++){
    //     if(!result.includes(b[i])){
    //         result.push(b[i])
    //     }
    // }
    
    // result.sort((x,y)=>x-y);
    // return result;
    
    }
}
