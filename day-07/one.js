import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

const grid = file.split("\n").map(el => el.split(""));
const max = grid[0].length
let splits = 0;

// Init tachyon's tracking system and the first one
const tachyons = new Array(max).fill(false);
tachyons[grid[0].indexOf("S")] = true;

for (let y = 1; y < max; y++) {
	if (grid[y].length === 0) {
		continue;
	}

	for (let x = 0; x < max; x++) {
		if (tachyons[x] === true && grid[y][x] === "^") {
			splits++;
			tachyons[x] = false;

			if (x > 0) {
				tachyons[x - 1] = true;
			}
			if (x < max - 1) {
				tachyons[x + 1] = true;
			}
		}
	}
}

console.log(splits);

