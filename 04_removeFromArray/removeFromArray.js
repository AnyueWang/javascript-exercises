const removeFromArray = function(arr, ...args) {
    revisedArr = [];
    i = 0;
    lenArr = arr.length;
    while(i < lenArr) {
        if (! args.includes(arr[i])) {
            revisedArr.push(arr[i]);
        }
        i++;
    }
    return revisedArr
};

// Do not edit below this line
module.exports = removeFromArray;
