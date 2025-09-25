// Problem 2: Factorial 
function factorial(n) {
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
}

// Demo
console.log(factorial(5)); // 120


