/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums.splice(0,nums.length,...nums.filter((val,index)=> nums.indexOf(val)===index || nums.indexOf(val)+1===index))
};