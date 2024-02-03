/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i + 1]){
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }
    
    const withoutZero = nums.filter((v) => !!v);
    const onlyZero = Array(nums.length - withoutZero.length).fill(0);
    
    return [...withoutZero, ...onlyZero];
};