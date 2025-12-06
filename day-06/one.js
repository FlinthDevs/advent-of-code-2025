import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

const matrix = [];
for (const line of file.split("\n")) {
	if (line === "") {
		continue;
	}

	// Group each number by removing blank spaces and ignore last row (sign).
	const l = line.split(" ");

	if (l[0] === "*" || l[0] === "+") {
		matrix.push(l.filter(el => el !== ""));
	} else {
		matrix.push(l.filter(el => el !== "").map(el => parseInt(el)));
	}
}

let sum = 0;
// Move through each column and each number in it, to update result.
for (let y = 0; y < matrix[0].length; y++) {
	const sign = matrix[matrix.length - 1][y];
	let colSum = sign === "+" ? 0 : 1;

	for (let x = 0; x < matrix.length - 1; x++) {
		if (sign === "+") {
			colSum += matrix[x][y];
		} else {
			colSum *= matrix[x][y];
		}
	}

	sum += colSum;
}


console.log(sum);

