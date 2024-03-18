const sumAll = function (numStart, numEnd) {
    if (numStart < 0 || numEnd < 0) return "ERROR"
    if (typeof (numStart) !== "number" || typeof (numEnd) !== "number") return "ERROR"
    let sum = 0;
    if (numStart > numEnd) {
        let temp = numStart;
        numStart = numEnd;
        numEnd = temp;
    }
    for (let i = numStart; i <= numEnd; i++) sum += i;
    return sum
};

// Do not edit below this line
module.exports = sumAll;
