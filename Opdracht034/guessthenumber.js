const nameInput = prompt("Welkom! Wat is je naam?");
console.log(nameInput);
alert("Hey " + nameInput);
const numberMin = prompt("Wat is het laagste getal dat u wilt raden?");
const numberMax = prompt("Wat is het hoogste getal dat u wilt raden?");
let numberCount = prompt("Hoeveel keer wilt u raden?");
let numberInput = prompt("Voer een getal in van " + numberMin + "  tot " + numberMax + " om te beginnen met raden...");
/* Genereer een ramdom getal */
function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
const RandomGetal = getRandom(numberMin, numberMax);

/* Check of het getal geraden is*/
function checkNumber(numberInput) {
    if (numberInput == RandomGetal) {
        alert("Gefeliciteerd, U ontvangt een appeltaart.");
        numberCount = 0;
    } else {
        numberCount--;
        alert("Dat is niet correct.");
    };
};
checkNumber(numberInput);
/* Loopi */
while (numberInput !== RandomGetal && numberCount > 0) {
    numberInput = prompt("U heeft nog " + numberCount + " poging(en). Raad nog eens...");
    checkNumber(numberInput);
};
alert("Dag " + nameInput + ".Tot de volgende keer!");