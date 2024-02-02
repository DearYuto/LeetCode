/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return Array(nums.length * 2).fill(0).map((v, i) => {
        return nums[i % nums.length];
    })
};