// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    // Function to convert the given string to Camel Case
    convertToCamelCase(s) {
        // code here
       let words = s.split(" ").filter(word => word !== "");;
       
       for(let i=1; i<words.length; i++){
           words[i] = words[i][0].toUpperCase() + words[i].slice(1);
       }
       return words.join("")
    }
}