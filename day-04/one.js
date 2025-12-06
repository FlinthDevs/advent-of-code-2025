import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

const floor = [];

// Build array with padding on the edges to make an easier second loop for test.
for (const line of file.split("\n")) {
	if (line === "") {
		continue;
	}

	const l = line.split("").map(el => { return { v: el, c: 0 } });
	l.unshift({ v: ".", c: 0 });
	l.push({ v: ".", c: 0 });
	floor.push(l);
}

floor.unshift(new Array(floor[0].length).fill({ v: ".", c: 0 }));
floor.push(new Array(floor[0].length).fill({ v: ".", c: 0 }));

// Increment count of adjecent cells.
for (let y = 1; y < floor.length - 1; y++) {
	for (let x = 1; x < floor[y].length - 1; x++) {
		if (floor[y][x].v !== "@") {
			continue;
		}

		floor[y - 1][x - 1].c++;
		floor[y - 1][x].c++;
		floor[y - 1][x + 1].c++;
		floor[y][x - 1].c++;
		floor[y][x + 1].c++;
		floor[y + 1][x - 1].c++;
		floor[y + 1][x].c++;
		floor[y + 1][x + 1].c++;
	}
}

// Compute result.
let sum = 0;
for (let y = 0; y < floor.length; y++) {
	for (let x = 0; x < floor[y].length; x++) {
		if (floor[y][x].v !== "@" || floor[y][x].c >= 4) {
			continue;
		}

		sum++;
	}
}

console.log(sum);

