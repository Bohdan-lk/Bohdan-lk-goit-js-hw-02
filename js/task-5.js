"use strict";

const checkForSpam = function checkForSpam(string) {
    string = string.toLowerCase();
    const isStr = string.includes('spam') || string.includes('sale');
    return isStr;
};


console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true