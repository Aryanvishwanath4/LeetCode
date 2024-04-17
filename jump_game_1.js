/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let furthestReach = 0; // Furthest position reachable
  const target = nums.length - 1; // Target position at the end

  for (let i = 0; i <= furthestReach; i++) {
    furthestReach = Math.max(furthestReach, i + nums[i]);

    if (furthestReach >= target) {
      return true;
    }

    if (furthestReach === i) {
      return false;
    }
  }

  return false;
};
