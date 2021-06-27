String.prototype.toJadenCase = function() {
    var l = this.toLowerCase().split(" "); //?
    l.map(this.toUpperCase() + this.substr(1).toLowerCase());
    return this.split(" ").map(this.toUpperCase() + this.substr(1).toLowerCase());
};

var str = "How can mirrors be real if our eyes aren't real";
//str.split(" ").charAt(0).toUpperCase(); //?
//str.split(" "); //?
str.toJadenCase();