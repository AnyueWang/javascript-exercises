const fibonacci = function(num) {
    const numReal = +num;
    let first = 1;
    let second = 1;
    let i = 0;
    if (numReal < 0) return "OOPS"
    if (numReal === 0) return 0
    if (numReal === 1 || numReal === 2) return 1
    while (i < numReal-2) {
        const sum = first + second;
        first = second;
        second = sum;
        i++;
    }
    return second
};

// Do not edit below this line
module.exports = fibonacci;
