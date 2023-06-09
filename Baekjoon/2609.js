let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n, m] = input[0].split(" ");
let N = Number(n);
let M = Number(m);
console.log(N,M);
let result = "";
// 첫째줄 최대공약수
// 둘째줄 최소공배수

function max (a,b) {
	let r 
	while (b !== 0 ) {
		r = a % b
		a = b
		b = r
	}
  // result += `${a}\n`;
	return a
}

function min(a,b) {
  // const resultRes = (a * b) / max(a, b);
  // result += `${resultRes}`;
	return (a * b) / max(a, b) 
}
result += `${max(24,18)}\n${min(24,18)}`
// result += `${resultArr.join(" ")}\n`;

console.log(result);