function isPrime(n){
    if (n<2){
        return false;
    }
    for(let i=2; i<n; 1++)
        if(n%i === 0){
            return false;
        }
}
console.log(isPrime(1))
console.log(isPrime(5))
