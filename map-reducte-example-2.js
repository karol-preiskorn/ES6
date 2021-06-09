//mdn: Object;
// Object.prototype.foobie = "bletch"; // add property to foo that won't be counted

// var count = 0;
// for (var k in foo) {
//     if (foo.hasOwnProperty(k)) {
//         ++count;
//     }
// }
// console.log("Found " + count + " properties specific to foo");

// var count = function(ary, classifier) {
//     return ary.reduce(function(counter, item) {
//         var p = (classifier || String)(item);
//         counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
//         return counter;
//     }, {});
// };
// console.log(count(attachments));
// //--------------------------
// console.log("sum ver2: " + Object.keys(attachments).length);
// //---------------------------
// var count = 0;
// for (var prop in attachments) {
//     if (attachments.hasOwnProperty(prop)) ++count;
//     //console.log(prop + " --> " + attachments.hasOwnProperty(prop));
// }
// console.log("sum ver3: " + count);

// //------------------------------
// Object.prototype.length = function() {
//     var i = 0;
//     for (var p in this) {
//         if ("function" == typeof this[p]) continue;
//         i++;
//     }
//     return i;
// };

// console.log(attachments.length()); // alerts 2