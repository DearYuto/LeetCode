/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;
    
    let result = 0;
    let a = s[0]
        b = s[1]
        c = s[2];
    if(a !== b && a !== c && b !== c) result++;
    
    for(let i = 3; i < s.length; i++){
        a = b;
        b = c;
        c = s[i];
        
        if(a !== b && a !== c && b !== c) result++;
    }
        
    return result;
};