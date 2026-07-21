/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    isBalanced(s) {
        // code here
        
        let stack  = [];
        
        // let pairs  = {
        //     ')' : '(',
        //     '}' : '{',
        //     ']' : '['
        // }
        
        for(const ch of s){
            if(ch === '(' || ch === '{' || ch === '['){
                stack.push(ch);
            }else{
                if(stack.length === 0) return false;
                
                let top  = stack.pop();
                
                if(
                    (ch === ')' && top !== '(') || 
                    (ch === '}' && top !== '{') ||
                    (ch === ']' && top !== '[')
                    ){
                        return false;
                    }
            }
        }
       return stack.length  === 0 ; 
    }
}