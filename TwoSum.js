/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      //to check if the target-nums[i] is present in the array
      if (nums.slice(i + 1).includes(target - nums[i])) {
        /*indexOf gives the first occurance of an element here 
              nums.indexOf(target-nums[i],i+1) gives the first occurance from i+1 index*/
        return [i, nums.indexOf(target - nums[i], i + 1)];
      }
    }
    return null;
  };
  
  /*sample example
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  */
  