let age = 19;
let Fem = true;
var Driverstat = "Bob";
var Name = "Teun";
const totalAmount = 24

if (age >= 18 && Fem) {
    console.log("Je mag naar binnen.")
}
else {
    console.log("Je mag niet naar binnen.")
}
if (Driverstat == "Bob") {
    console.log("Je mag rijden")
} else {
    console.log("Je mag niet rijden")
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}
if (Name == "Sarah" || Name == "Bram") {
    console.log("Je krijgt een gratis biertje!")
}
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt je gratis (vega)bitterballen")
}
else if
    (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt je gratis portie nachos")
}
else if (totalAmount >= 100) {
    console.log("Je krijgt je gratis fles champagne")
}