console.time();

function isSimple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


function getPrimes(aLength) {

    let primes = [];
    for (let i = 2; primes.length < aLength; i++) {
        if (isSimple(i)) {
            primes.push(i);
        }
    }
    return primes;

}

console.log(getPrimes(+process.argv[2]));
console.timeEnd();