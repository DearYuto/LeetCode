/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;
    
    let result = 0;
    const sw = [s[0], s[1]];
    
    for(let i = 2; i < s.length; i++){
        const char = sw[i - 2] + sw [i - 1] + s[i];
        if(new Set(char.split('')).size === 3) result++;
        
        sw[i] = s[i];
    }
        
    return result;
};