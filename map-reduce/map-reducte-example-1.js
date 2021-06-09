"use strict";

/*jshint esversion: 6 */

export const attachments = [{
        files: [{
                id: 1,
                insertDate: 1587387095000,
                name: "OneSpan-Accessibility-withoutspaces.pdf",
                preview: true,
            },
            {
                id: 2,
                insertDate: 1587387155000,
                name: "All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
            {
                id: 3,
                insertDate: 1587387167000,
                name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
        ],
        id: "MzssT1vdNMA8",
        name: "test1",
        required: true,
        status: "COMPLETE",
    },
    {
        files: [{
                id: 1,
                insertDate: 1587387095000,
                name: "OneSpan-Accessibility-withoutspaces.pdf",
                preview: true,
            },
            {
                id: 2,
                insertDate: 1587387155000,
                name: "All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
            {
                id: 3,
                insertDate: 1587387167000,
                name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
        ],
        id: "MzssT1vdNMA8",
        name: "test1",
        required: true,
        status: "COMPLETE",
    },
    {
        files: [{
                id: 1,
                insertDate: 1587387095000,
                name: "OneSpan-Accessibility-withoutspaces.pdf",
                preview: true,
            },
            {
                id: 2,
                insertDate: 1587387155000,
                name: "All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
            {
                id: 3,
                insertDate: 1587387167000,
                name: "ADA_All Fields_good+radio_2 signatures (1).pdf",
                preview: true,
            },
        ],
        id: "MzssT1vdNMA8",
        name: "test1",
        required: true,
        status: "COMPLETE",
    },
];

var initialValue = 0;

// tablice zalacznikow
// attachments
// robisz map zeby miec tablice dlugosci

// [{files: []}, {files: []}, {files: []}]
//     |            |            |
// [   3,           3,           3  ]

const result = [1, 2, 3]
    .map(function(x) {
        return x * x;
    })
    .reduce(function(sum, x) {
        return sum + x;
    }, 0);

console.log(result);

const toFilesCount = function(item) {
    console.log(item.files.length);
    // zwroc ilosc plikow
    return item.files.length;
};

const countArr = attachments.map(toFilesCount);

console.log(countArr);

var reducer = function(accumulator, item) {
    return accumulator + item.files.length;
};
var count = attachments.reduce(reducer, initialValue);

const sum = attachments
    .map((attachment) => attachment.files.length)
    .reduce((a, b) => a + b, 0);

console.log(sum);

console.log(count);
ents.reduce(reducer, initialValue);
console.log(count);

var list1 = [{
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "JavaScript",
    },
    {
        firstName: "Maia",
        lastName: "S.",
        country: "Tahiti",
        continent: "Oceania",
        age: 28,
        language: "JavaScript",
    },
    {
        firstName: "Shufen",
        lastName: "L.",
        country: "Taiwan",
        continent: "Asia",
        age: 35,
        language: "HTML",
    },
    {
        firstName: "Sumayah",
        lastName: "M.",
        country: "Tajikistan",
        continent: "Asia",
        age: 30,
        language: "CSS",
    },
];

const sum = list1
    .map((attachment) => attachment.continent == 'Europe')
    .reduce((a, b) => a + b, 0);