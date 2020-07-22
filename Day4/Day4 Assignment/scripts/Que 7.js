function primeFactorsTo(n) {
    var store = [],
        i, j, primes = [];
    for (i = 2; i <= n; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (j = i << 1; j <= n; j += i) {
                store[j] = true;
            }
        }
    }


    return primes;

}
console.log(primeFactorsTo(10));
console.log(primeFactorsTo(40));
