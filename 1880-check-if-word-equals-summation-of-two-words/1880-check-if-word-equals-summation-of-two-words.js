/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const items = [firstWord, secondWord, targetWord].reduce((acc, v) => {
        let converted = '';
        for(let i = 0; i < v.length; i++){
            converted += Math.abs(97 - v.charCodeAt(i));
        }
        
        return [...acc, converted];
    }, []).map(Number);
    

    return items[0] + items[1] === items[2];
};