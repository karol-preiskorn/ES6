describe("Tests", () => {
    it("test", () => {
        var misc = require("../../code-wars/7k-2.js");
        var str = "How can mirrors be real if our eyes aren't real";
        str.assertEquals(
            str.toJadenCase(),
            "How Can Mirrors Be Real If Our Eyes Aren't Real"
        );
    });
});