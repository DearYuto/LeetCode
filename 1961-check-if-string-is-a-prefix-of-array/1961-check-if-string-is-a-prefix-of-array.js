/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words){
    let w = ''; 
    
    for(let i = 0; i < words.length; i++){
        w += words[i];
        if(s === w) return true;
    }
    
    return false;
};