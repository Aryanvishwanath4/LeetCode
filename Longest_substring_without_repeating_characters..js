/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let itr = 0;
    let max = 0;
    let str = []
    for(let i =0 ;i< s.length;i++){
        //enters loop and slices the first elements till that element has been removed from the str array
        while(str.includes(s[i])){
            str.splice(0,1)
            itr++;
        }
        str.push(s[i])
        max = Math.max(max, i - itr + 1)
    }
    return max;
};
console.log(lengthOfLongestSubstring('hello'))