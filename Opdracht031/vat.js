const brutoprice = 40;
const nettoprice = 0;
var vatpercentage = 0.21;
var nettopercentage = 0;

const functionprice = function (brutoprice, vatpercentage) {

    ResultVat = [(nettopercentage * brutoprice), (vatpercentage * brutoprice)];
};

const functionnetpercentage = function (vatpercentage) {

    nettopercentage = (1 - vatpercentage);

    functionprice(brutoprice, vatpercentage);
};

functionnetpercentage(vatpercentage);

console.log(ResultVat);
