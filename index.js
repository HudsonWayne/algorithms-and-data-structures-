function isThePowerOfTwo(n) {
    if (n < 1) {
        return false; // Fixed the syntax error here
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // If n is not even, it's not a power of two
        }
        n = n / 2; // Divide n by 2
    }
    return true; // If we reach here, n is a power of two
}

console.log(isThePowerOfTwo(1)); // Output: true
console.log(isThePowerOfTwo(2)); // Output: true
console.log(isThePowerOfTwo(5)); // Output: false