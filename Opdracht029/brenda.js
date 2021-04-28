const entry = function (max, age, people) {
    if (max < people) {

        result = "It's too busy now, come back later."
    };

    if (age < 18) {

        result = "This is a club for adults."
    };

    return result;
}

const maxpeople = 100;
const agevisitor = 17;
const peopleinclub = 75;
var result = "Come in!";;

entry(maxpeople, agevisitor, peopleinclub);

console.log(result);

