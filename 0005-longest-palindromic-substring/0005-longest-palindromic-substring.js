/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
 /**
 * @param {string} s
 * @return {string}
 */

    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;
    
    // Helper function to expand outward from a center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the found palindrome
        return right - left - 1;
    };
    
    for (let i = 0; i < s.length; i++) {
        // Odd-length palindromes (e.g., "aba")
        const len1 = expandAroundCenter(i, i);
        // Even-length palindromes (e.g., "abba")
        const len2 = expandAroundCenter(i, i + 1);
        
        const maxLen = Math.max(len1, len2);
        
        // Update the boundaries if a longer palindrome is found
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    return s.substring(start, end + 1);
};
