class Solution {
    isBinary(s) {
        // code here
        for(let ch of s){
            if(ch !== '0' && ch !== '1'){
                return false;
            }
        }
        return true ;
    }
}