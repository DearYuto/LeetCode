/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const m = new Map();
    
    for(let w of words){
        m.set(w, (m.get(w) || 0) + 1);
    }
    
    return [...m].sort((a, b) => {
        if(b[1] === a[1]){
            return a[0].localeCompare(b[0]);
        }
        
        return b[1] - a[1]
    }).map((v) => v[0]).slice(0, k);
    
    
};