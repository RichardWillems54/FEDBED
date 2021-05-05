/* Grade assigner */

function assignGrade(score) {
    if (score > 90) {
        return grade = 'A';
    } else if (score > 80) {
        return grade = 'B';
    } else if (score > 70) {
        return grade = 'C';
    } else if (score > 65) {
        return grade = 'D';
    } else {
        return grade = 'E';
    }
}

for (i = 60; i <= 100; i++) {
    assignGrade(i)
    console.log("Voor " + i + " punten, krijg je een " + grade + ".");
}
