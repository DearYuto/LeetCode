/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let start = 0;
        let end = n;
        let mid = Math.floor(n / 2);
        
        while(start < end){
            if(isBadVersion(mid)){
                end = mid;
            } else {
                start = mid + 1;
            }
               
            mid = Math.floor((end + start) / 2);
        }
        
        return start;
    };
};