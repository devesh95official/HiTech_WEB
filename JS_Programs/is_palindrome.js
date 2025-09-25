// Problem 5: Check if a string is a palindrome
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true


