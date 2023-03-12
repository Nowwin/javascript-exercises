const repeatString = function(message, num) {

    if (num < 0) {
        return 'ERROR';
    }

    result = "";

    for (let index = 0; index < num; index++) {
        result = result + message;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
