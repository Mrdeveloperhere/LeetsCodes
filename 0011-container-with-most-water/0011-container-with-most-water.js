/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxAreaValue = 0; // Avoid variable name collision with the function name
    
    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        
        const currentArea = width * currentHeight;
        maxAreaValue = Math.max(maxAreaValue, currentArea);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxAreaValue;
};
