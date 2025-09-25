// Problem 3: First N Fibonacci numbers
function fib(n) {
    const a = [];
    for (let i = 0; i < n; i++) a[i] = i < 2 ? i : a[i - 1] + a[i - 2];
    return a;
}

// Demo
console.log(fib(10));


