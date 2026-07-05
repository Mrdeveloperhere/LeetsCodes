/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
     if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    
    const counts = {};
    const result = [];
    
    // Count frequencies in the smaller array
    for (const num of nums1) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    // Find intersections with the larger array
    for (const num of nums2) {
        if (counts[num] > 0) {
            result.push(num);
            counts[num]--;
        }
    }
    
    return result;
}