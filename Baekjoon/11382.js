let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [a, b, c] = input[0].split(" ");
const A = Number(a);
const B = Number(b);
const C = Number(c);

console.log(A + B + C);
