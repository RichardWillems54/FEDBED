const age = 18;
adult = false;

const checkage = function (agetest) {

    if (agetest >= 18) {

        adult = true;

    };
    ageoutput(adult);
};

const ageoutput = function (outputadult) {

    if (outputadult) {

        console.log("Hello there");

    } else {

        console.log("Hey Kiddo");
    }
}

checkage(age);

