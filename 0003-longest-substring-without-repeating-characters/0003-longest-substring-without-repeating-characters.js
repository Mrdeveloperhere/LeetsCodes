
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0, max = +!!s.length;
    let o = new Array(128).fill(-1);
    for (let i = 0; i < s.length; i++) {
        right++;
        let code = s.charCodeAt(i);
        left = Math.max(left, o[code] + 1);
        o[code] = i;
        if (right - left > max) max = right - left;
    }
    return max;
};