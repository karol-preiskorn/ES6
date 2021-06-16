// You will be given an array of objects(hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe.

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
        continent: "Europe",
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

function countDevelopers(list) {
    return list
        .map((list) =>
            list.continent == "Europe" && list.language == "Javascript" ? 1 : 0
        )
        .reduce((a, v) => a + v, 0);
}

function countDevelopers2(list) {
    return list
        .filter((dev) => dev.language === "JavaScript")
        .filter((dev) => dev.continent === "Europe").length;
}

function countDevelopers3(list) {
    return list.filter(
        (x) => x.continent == "Europe" && x.language == "JavaScript"
    ).length;
}

console.log(countDevelopers(list1));
module.exports.list1 = list1;
module.exports.countDevelopers = countDevelopers;
module.exports.countDevelopers2 = countDevelopers2;
module.exports.countDevelopers3 = countDevelopers3;