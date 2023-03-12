const reverseString = function(message) {
    result = "";
    lenOfString = message.length;

    for (let i = 0; i < lenOfString; i++) {
        result = result 
        + message.slice(lenOfString - 1 - i, lenOfString - i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
