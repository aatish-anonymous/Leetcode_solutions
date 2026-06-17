class Solution {
    checkPangram(s) {
        // code here
        let letter = s.toLowerCase()
        
        for(let i=0; i<26; i++){
            let char  = String.fromCharCode(97+i);
            if(!letter.includes(char)){
                return false
            }
        }
        return true 
    }
};