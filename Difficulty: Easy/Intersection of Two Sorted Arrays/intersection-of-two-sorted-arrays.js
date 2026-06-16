class Solution {
    intersection(a, b) {
        // code here
      let interSet = new Set(a);
      let result = new Set();
      
      for(let i of b){
          if(interSet.has(i)){
              result.add(i)
          }
      }
      return [...result]
    }
}