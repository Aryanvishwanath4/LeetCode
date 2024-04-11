/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) return "";

    let longest = '';

    for (let i = 0; i < s.length; i++) {
        const palindrome1 = expandAroundCenter(s, i, i); // For odd length palindromes
        const palindrome2 = expandAroundCenter(s, i, i + 1); // For even length palindromes
        
        const currentLongest = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;
        
        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }

    return longest;
}
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right); // Return the palindrome substring
}