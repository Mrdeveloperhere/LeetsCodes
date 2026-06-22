/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let number = 0;

    for (let i = 0; i < s.length; i++) {

        let seen = new Set();

        for (let j = i; j < s.length; j++) {

            // Duplicate found
            if (seen.has(s[j])) {
                break;
            }

            // Add character
            seen.add(s[j]);
        }

        // Update maximum length
        number = Math.max(number, seen.size);
    }

    return number;
};