/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    //we incilize n input inside counter 
    let counter = n;
    return function() {
        //then we  increment it with each function call 
        return counter++ ;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */