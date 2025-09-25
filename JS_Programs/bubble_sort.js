// Problem 9: Bubble sort
function bubbleSort(a) {
    for (let n = a.length; n > 1; n--) {
        for (let i = 1; i < n; i++) if (a[i - 1] > a[i]) [a[i - 1], a[i]] = [a[i], a[i - 1]];
    }
    return a;
}
console.log(bubbleSort([5, 1, 4, 2, 8])); // [1,2,4,5,8]

