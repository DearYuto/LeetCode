/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const obj = {
        'N' : [1, 0],
        'S' : [-1, 0],
        'E' : [0, 1],
        'W' : [0, -1]
    }
    const map = new Map();
    let start = [0, 0];
    
    for(let p of path){        
        const [y, x] = obj[p];
        map.set(start.join(' '), start);
        start = [start[0] + y, start[1] + x];
        
        if(!!map.get(start.join(' '))) return true;

        map.set(start.join(' '), start);
    } 
    
    return false;
};