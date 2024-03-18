const repeatString = function(str, repeatTimes) {
    if (repeatTimes<0) return "ERROR"
    repStr = '';
    for (let i=0; i<repeatTimes;i++) {
        repStr += str;
    }
    return repStr
};

// Do not edit below this line
module.exports = repeatString;
