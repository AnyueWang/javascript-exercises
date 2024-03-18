const reverseString = function (str) {
    let lenStr = str.length;
    let reversedStr = '';
    for (let i = lenStr; i > 0; i--) {
        reversedStr += str[i-1];
    }
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
