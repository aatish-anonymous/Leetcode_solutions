class Solution {
    /**
     * @param {number[]} arr - Array of integers (input)
     * @return {number[]} - List of unique integers
     */
    remDuplicate(arr) {
        // code here
        let remcate =  new Set(arr.sort((a,b)=>a-b));
        
        return [...remcate]
    }
}