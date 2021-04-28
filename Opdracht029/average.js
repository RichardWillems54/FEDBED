
const average = function (nums) {
    avg = nums.reduce((a, b) => (a + b)) / nums.length;
    console.log(avg);
    return avg;
}
let avg;
var numbers = [5, 9, 8, 1, 6];

average(numbers);

