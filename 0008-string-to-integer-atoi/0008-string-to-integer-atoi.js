/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
// Skip leading spaces.
// Determine sign.
// Read digits one by one.
// Build the number.
// Check overflow while building.
// Return result with sign.

// 32-bit signed integer range
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

let i = 0;  //i is the current position in string
let sign = 1;  // by  default its positive intiger
let result = 0; //parse number


// Skip white spaces
while (i < s.length && s[i] === ' ') {
    i++;
}

//condition for convertion positive negative digit
if(i<s.length && (s[i]==='+' || s[i] === '-')){
    sign = s[i] === '-' ? -1 : 1 ;
    i++;
}

// converts digits

while(i<s.length && s[i] >= '0' && s[i] <= '9'){
    let digit = s[i].charCodeAt(0)-'0'.charCodeAt(0);

    //overFlow check 
    if(result > Math.floor(INT_MAX/10)||
    (result === Math.floor(INT_MAX/10) && digit >7)){

    return sign ===1 ? INT_MAX : INT_MIN;

    }
    result = result*10+digit;
    i++;
}
return result*sign;
};