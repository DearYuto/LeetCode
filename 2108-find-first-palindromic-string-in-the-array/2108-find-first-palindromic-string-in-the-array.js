/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
 
    for(let i = 0; i < words.length; i++){
        let flag = false;
        
        for(let j = 0; j < ~~(words[i].length / 2) ; j++){
            const word = words[i];
            if(word[j] !== word[word.length - 1 - j]){
                flag = true;
                break;
            }
        }
        
        if(!flag) return words[i];
    }
    
    return '';
};