import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("test.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

let lock = 50;
let zeros = 0;
let clicks = 0;

for (const line of file.split("\n")) {
	if (line === "") {
		continue;
	}

	// Converting line to integers.
	const ll = line.split("");
	const f = ll.shift();
	const rest = parseInt(ll.join(""));

	// Update progress.
	const prevLock = lock;
	let sign = (f[0] === "L") ? -1 : 1;
	lock += rest * sign;

	// Counting the clicks.
	for (let i = prevLock; i !== lock; i = i + (sign * 1)) {
		if (i % 100 === 0) {
			clicks++;
		}
	}

	// Cleaning progress.
	lock = lock % 100;

	if (lock === 0) {
		zeros++;
	}
}

console.log(" ---- - - - solution ---- - - -");
console.log("lock:  ", lock);
console.log("zeros: ", zeros);
console.log("click: ", clicks);

