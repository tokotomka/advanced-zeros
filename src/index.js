module.exports = function getZerosCount(number, base) {
    let primeFactors = getPrimeFactors(n = base, base);
    return getMin(countOccurrences(number, primeFactors));
};


let getPrimeFactors = (n, base) => {
    let arr = [], uniqueArr = [], i = 2;
    while (n > 1 && n <= base) {
        if (n % i === 0) {
            arr.push(i);
            n /= i;
        } else if (i === 2) {
            i++;
        } else {
            i += 2;
        }
    }
    while (arr.length > 0) {
        uniqueArr.push(arr.filter(e => e === arr[0]));
        arr = arr.filter(e => e !== arr[0]);
    }
    return uniqueArr;
};

let countOccurrences = (num, arr) => {
    return arr.map(e => {
        let result = 0, pow = 1;
        while (num / Math.pow(e[0], pow) >= 1) {
            result += Math.floor(num / Math.pow(e[0], pow++));
        }
        return Math.floor(result / e.length);
    });
};

let getMin = arr => arr.sort((a, b) => a - b)[0];
