/**
 * @return {Function}
 */
var createHelloWorld = function() {
    let sayHello  = "Hello World"
    return function(...args) {
       return sayHello; 
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */