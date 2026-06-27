/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    // Base case: if 1 row or string is too short, return as is
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Initialize an array of empty strings for each row
    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    // Traverse the string and distribute characters into rows
    for (const char of s) {
        rows[currentRow] += char;

        // Change direction at top (0) and bottom (numRows - 1) rows
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Increment or decrement row index based on direction
        currentRow += goingDown ? 1 : -1;
    }

    // Combine all rows into a single string
    return rows.join("");
}
