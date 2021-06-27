//
// https: //www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
//
String.prototype.toJadenCase = function() {
    var l = this.substr(0, 1).toUpperCase() + this.substr(1);
    l = l.split(" ");
    //?
    const reducer = (accumulator, currentValue) =>
        accumulator +
        " " +
        currentValue.substr(0, 1).toUpperCase() +
        currentValue.substr(1); //?
    return l.reduce(reducer);
};

String.prototype.toJadenCase2 = function() {
    return this.split(" ")
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};

module.exports.toJadenCase = String.prototype.toJadenCase;

"how can mirrors be real if our eyes aren't real".toJadenCase2(); //?