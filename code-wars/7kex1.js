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

function countDevelopers(list) {
    return list
        .map((list) => (list.continent == "Europe" ? 1 : 0))
        .reduce((a, v) => a + v, 0);
}

console.log(countDevelopers(list1));

describe("Tests", () => {
    it("test", () => {
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

        var list2 = [{
                firstName: "Oliver",
                lastName: "Q.",
                country: "Australia",
                continent: "Oceania",
                age: 19,
                language: "HTML",
            },
            {
                firstName: "Lukas",
                lastName: "R.",
                country: "Austria",
                continent: "Europe",
                age: 89,
                language: "HTML",
            },
        ];

        Test.assertEquals(countDevelopers(list1), 1);
        Test.assertEquals(countDevelopers(list2), 0);
    });
});