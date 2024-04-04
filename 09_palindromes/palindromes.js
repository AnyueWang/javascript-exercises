const palindromes = function (str) {
    let strProcessed = str.toLowerCase();
    let arr = strProcessed.match(/([a-z0-9])/g);
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) return false
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
