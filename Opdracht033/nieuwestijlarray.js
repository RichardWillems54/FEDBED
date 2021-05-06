var colors = ["yellow", "blue", "red", "orange"];

colors.forEach(element => console.log(element));

/* For loop: 3 regels
   while loop: 4 regels
   forEach: 1 regel

   forEach is beter toepasbaar voor een array, minder effort en minder tijd.
   Is beter leesbaar maar wellicht heb je met for/while meer mogelijkheden, breder toepasbaar.

   */

const persoon = { a: "Richard", b: "Willems", c: "48 jaar", d: "Getrouwd", e: "Kind" };

for (const property in persoon) {
    console.log(`${property}: ${persoon[property]}`);
}