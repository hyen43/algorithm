// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
let quadrant = 0;

if (a > 0 && b > 0) {
  quadrant = 1;
} else if (a < 0 && b > 0) {
  quadrant = 2;
} else if (a < 0 && b < 0) {
  quadrant = 3;
} else if (a > 0 && b < 0) {
  quadrant = 4;
}

console.log(quadrant);
