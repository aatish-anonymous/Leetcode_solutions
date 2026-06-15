
class Solution {
    printTillN(n) {
        if (n === 0) return;           // Base case
        
        this.printTillN(n - 1);        // First recurse
        process.stdout.write(n + " "); // Then print
    }
}
