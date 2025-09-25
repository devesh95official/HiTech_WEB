// Problem 7: Count vowels in a string
function countVowels(s) {
    let c = 0;
    for (const ch of s.toLowerCase()) if ('aeiou'.includes(ch)) c++;
    return c;
}
console.log(countVowels('hello world')); // 3

