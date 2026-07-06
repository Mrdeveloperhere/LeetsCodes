/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    // Pointer for the position of the last unique element
    let i = 0; 
    
    // Iterate through the array with a second pointer j
    for (let j = 1; j < nums.length; j++) {
        // If we find a new unique element
        if (nums[j] !== nums[i]) {
            i++;             // Move the unique pointer forward
            nums[i] = nums[j]; // Update the next unique spot with the new value
        }
    }
    
    // The number of unique elements is the index i + 1
    return i + 1;
};