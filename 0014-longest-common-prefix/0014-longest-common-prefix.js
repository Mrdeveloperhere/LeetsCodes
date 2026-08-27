var longestCommonPrefix = function(strs) {

    let n = strs[0];

    for (let i = 1; i < strs.length; i++) {

        for (let j = 0; j < n.length; j++) {

            if (n[j] !== strs[i][j]) {

                // What should happen here?
                n = n.slice(0, j);
            }
        }
    }

    return n;
};