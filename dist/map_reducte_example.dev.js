"use strict";

var attachments = [{
  files: [{
    id: 1,
    insertDate: 1587387095000,
    name: "OneSpan-Accessibility-withoutspaces.pdf",
    preview: true
  }, {
    id: 2,
    insertDate: 1587387155000,
    name: "All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }, {
    id: 3,
    insertDate: 1587387167000,
    name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }],
  id: "MzssT1vdNMA8",
  name: "test1",
  required: true,
  status: "COMPLETE"
}, {
  files: [{
    id: 1,
    insertDate: 1587387095000,
    name: "OneSpan-Accessibility-withoutspaces.pdf",
    preview: true
  }, {
    id: 2,
    insertDate: 1587387155000,
    name: "All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }, {
    id: 3,
    insertDate: 1587387167000,
    name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }],
  id: "MzssT1vdNMA8",
  name: "test1",
  required: true,
  status: "COMPLETE"
}, {
  files: [{
    id: 1,
    insertDate: 1587387095000,
    name: "OneSpan-Accessibility-withoutspaces.pdf",
    preview: true
  }, {
    id: 2,
    insertDate: 1587387155000,
    name: "All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }, {
    id: 3,
    insertDate: 1587387167000,
    name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
    preview: true
  }],
  id: "MzssT1vdNMA8",
  name: "test1",
  required: true,
  status: "COMPLETE"
}];
console.log("-----------------------------------"); //mdn reduce;
//mdn Object.assign;
//mdn map;

var initialValue = 0;

var reducer = function reducer(accumulator, item) {
  return accumulator + item;
};

console.log(attachments.reduce(reducer, 5));
attachments.reduce(function (accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}, 0);
var fkey1oo = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
};
Object.prototype.foobie = "bletch"; // add property to foo that won't be counted

var count = 0;

for (var k in foo) {
  if (foo.hasOwnProperty(k)) {
    ++count;
  }
}

console.log("Found " + count + " properties specific to foo"); // var count = function(ary, classifier) {
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
//try to do it with functional programming