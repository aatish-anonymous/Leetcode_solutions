/**
 * @param {Node} head
 * @param {number} key
 * @returns {boolean}
 */
/**
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/


class Solution {
    searchKey(head, key) {
        // Code here
        let current =  head;
        
        while(current !== null){
            if(current.data === key){
                return true;
            }
            current = current.next
        }
        return false;
    }
}