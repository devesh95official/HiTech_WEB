// Problem 10: Unique elements of an array 
function unique(arr) {
    return [...new Set(arr)];
}
console.log(unique([1, 2, 2, 3, 1, 4])); // [1,2,3,4]

