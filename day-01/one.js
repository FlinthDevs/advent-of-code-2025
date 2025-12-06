import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("test.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

let lock = 50;
let zeros = 0;

for (const line of file.split("\n")) {
	if (line === "") {
		continue;
	}

	// Converting line to integers.
	const ll = line.split("");
	const f = ll.shift();
	const rest = parseInt(ll.join(""));

	// Update progress.
	const sign = (f[0] === "L") ? -1 : 1;
	lock = (lock + rest * sign) % 100;

	if (lock === 0) {
		zeros++;
	}
}

console.log(" ---- - - - solution ---- - - -");
console.log("lock:  ", lock);
console.log("zeros: ", zeros);

