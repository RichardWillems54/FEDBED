var person = { name: "Richard", age: 48 };
var evaluations = { value1: 7, value2: 10, value3: 9 }
var colors = ["groen", "blauw", "rood"];

console.log(person["name"]);
console.log(evaluations);
console.log(colors[0]);
console.log(colors[colors.length - 1])
colors.push("Geel");
colors.push("5");
colors.push({ greeting: "hi ik ben een object" });
console.log(colors[colors.length - 1]);