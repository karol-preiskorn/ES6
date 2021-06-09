/*jshint esversion: 6 */

const euros = [29.76, 41.85, 46.5];

var sum = euros.reduce((total, amount) => total + amount);

console.info(sum);

// ES5

sum = euros.reduce(function(total, amount) {
    return total + amount;
});

console.info(sum);

const average = euros.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
});

console.info(average);

const count = euros.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {});

console.info(count);