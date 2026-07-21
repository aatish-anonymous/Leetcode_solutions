/**
 * @param {string[]} arr
 * @returns {number}
 */

class Solution {
    evaluatePostfix(arr) {
        // code here
        let stack  = [];
        
        for(let token of arr){
            if(!isNaN(token)){
                stack.push(Number(token));
            }else{
                let b = stack.pop();
                let a = stack.pop();
                
                switch (token){
                    case '+' :
                        stack.push(a+b);
                        break;
                    case '-' :
                        stack.push(a-b);
                        break;
                    case '*' :
                        stack.push(a*b);
                        break;
                    case '/' :
                        stack.push(Math.floor(a/b));
                        break;
                    case '^' :
                        stack.push(Math.pow(a,b));
                        break;
                }
            }
        }
        return stack.pop();
    }
}