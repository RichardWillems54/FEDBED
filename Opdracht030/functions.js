/* function declaration */
function multiply(a, b) {
    console.log(Math.pow(((a * a) + (b * b)), 2))
}
multiply(2, 2);

/* function expression */
const keer = function (a, b) {
    console.log(Math.pow(((a * a) + (b * b)), 2))
};
keer(3, 3);

/* arrow function */
const x = (a, b) => {
    console.log(Math.pow(((a * a) + (b * b)), 2))
}
x(2, 8);
