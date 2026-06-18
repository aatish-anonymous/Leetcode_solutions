class Solution {
    checkPangram(s) {
        // code here
       
let letter = s.toLowerCase();
        
        const sentence = new Set();

        for (let char of letter) {
            if (char >= 'a' && char <= 'z') {
                sentence.add(char);
            }
        }

        return sentence.size === 26;

    }
};