/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
  let i = 0;
    let n = nums.length;
    
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1]; // Move the last element to the current index
            n--; // Reduce array size boundary
        } else {
            i++; // Only move ahead if current element is valid
        }
    }
    
    return n;
};