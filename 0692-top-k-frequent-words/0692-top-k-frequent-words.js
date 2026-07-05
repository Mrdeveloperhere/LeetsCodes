/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    // Step 1: Count frequency of each word
    const map = new Map();
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
    
    // Step 2: Convert map to an array of unique words
    const uniqueWords = Array.from(map.keys());
    
    // Step 3: Sort words based on frequency and lexicographical order
    uniqueWords.sort((a, b) => {
        const freqA = map.get(a);
        const freqB = map.get(b);
        
        // If frequencies are different, sort by frequency descending
        if (freqA !== freqB) {
            return freqB - freqA;
        }
        
        // If frequencies match, sort alphabetically ascending
        return a.localeCompare(b);
    });
    
    // Step 4: Return the top k elements
    return uniqueWords.slice(0, k);
};