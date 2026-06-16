class myStack {
    constructor() { this.q = []; }

    push(x) {
       this.q.push(x);
    }

    pop() {
        // Removes an element from the top of the stack
     return this.q.length === 0 ? -1 : this.q.pop();
    }

    top() {
        // Returns the top element of the stack
        // If stack is empty, return -1
       return this.q.length === 0 ? -1 : this.q[this.q.length - 1];
    }

    size() {
        // Returns the current size of the stack
       return this.q.length;
    }
}