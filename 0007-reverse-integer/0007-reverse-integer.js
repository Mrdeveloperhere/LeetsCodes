/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;  // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31
    
    let reversedNum = 0;
    
    while (x !== 0) {
        // Get the last digit (handles negative numbers correctly in JS)
        let pop = x % 10;
        
        // Truncate the last digit from x
        x = Math.trunc(x / 10);
        
        // Check for overflow before multiplying
        if (reversedNum > Math.trunc(INT_MAX / 10) || (reversedNum === Math.trunc(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        // Check for underflow before multiplying
        if (reversedNum < Math.trunc(INT_MIN / 10) || (reversedNum === Math.trunc(INT_MIN / 10) && pop < -8)) {
            return 0;
        }
        
        reversedNum = reversedNum * 10 + pop;
    }
    
    return reversedNum;
};
