/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        // Calculate the middle index safely to avoid overflow
        let mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] === target) {
            return mid; // Target found!
        } else if (nums[mid] < target) {
            left = mid + 1; // Target is to the right
        } else {
            right = mid - 1; // Target is to the left
        }
    }
    
    // If not found, 'left' will naturally point to the correct insertion index
    return left;
};