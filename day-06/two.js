import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

const lines = file.split("\n").filter(el => el !== "").map(el => el.split(""));
let matrix = [];
let sum = 0;

for (let x = lines[0].length - 1; x >= 0; x--) {
	let sign = lines[lines.length - 1][x];
	let col = "";


	// Create a string for each col, excluding spaces.
	for (let y = 0; y < lines.length - 1; y++) {
		if (lines[y][x] !== " ") {
			col = `${col}${lines[y][x]}`;
		}
	}

	// If not in "break" col, add them to the current colgroup (matrix)
	if (col.length > 0) {
		matrix.push(parseInt(col));
	}


	// Update result.
	if (sign === "*" || sign === "+") {
		if (sign === "*") {
			sum += matrix.reduce((acc, v) => acc * v, 1);
		} else {
			sum += matrix.reduce((acc, v) => acc + v, 0);
		}

		matrix = [];
	}
}

console.log(sum);

