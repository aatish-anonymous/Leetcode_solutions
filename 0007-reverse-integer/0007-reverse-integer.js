/**
 * @param {number} x
 * @return {number}
 */
 
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        let remainder = x % 10;

        rev = rev * 10 + remainder;

        if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }

        x = Math.trunc(x / 10);
    }

    return rev;
};