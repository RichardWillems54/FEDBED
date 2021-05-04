const baseprice = 30;
const vatpercentage = 1.21;

const totalprice = function (baseprice,vatpercentage){
amount = baseprice * vatpercentage;
vatamount (baseprice,vatpercentage);
};

const vatamount = function (baseprice,vatpercentage){
    vatamountvalue = (vatpercentage-1) * baseprice
return vatamountvalue;
};

totalprice(baseprice,vatpercentage);
console.log("Prijs: " + amount + " BTW-bedrag: "+ vatamountvalue);

