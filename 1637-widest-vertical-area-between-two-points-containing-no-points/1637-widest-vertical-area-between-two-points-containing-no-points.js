/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    
    let result = [];
    for(let i = 0; i < points.length - 1; i++){
        result.push(Math.abs(points[i][0] - points[i + 1][0]));
    }
    
    return Math.max(...result);
};