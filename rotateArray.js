/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length // when k is greater than array length ex: k=4 arr=[1,2] , k%2 gives 0(remainder of 4/2)
    nums.reverse()
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
};
function reverse(arr,start,end){
    while(start<end){
        const temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
}