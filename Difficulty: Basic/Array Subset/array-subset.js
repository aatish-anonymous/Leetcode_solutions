// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */


class Solution {
    isSubset(a, b) {
        let freq = {};

        // Count frequency of elements in a
        for (let num of a) {
            freq[num] = (freq[num] || 0) + 1;
        }

        // Check elements of b
        for (let num of b) {
            if (!freq[num] || freq[num] === 0) {
                return false;
            }
            freq[num]--;
        }

        return true;
    }
}