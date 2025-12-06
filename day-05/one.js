import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

let freshCount = 0;

const listings = [];
let inListing = true;

for (const line of file.split("\n")) {
	if (line === "") {
		inListing = false;
		continue;
	}

	// Builds lists.
	if (inListing) {
		const [min, max] = line.split("-");
		listings.push({ min: parseInt(min), max: parseInt(max) });
		continue;
	}

	const n = parseInt(line);

	// Quick win.
	if (n < listings[0].min && n > listings[listings.length - 1].max) {
		continue;
	}

	// Check each interval.
	for (const bounds of listings) {
		if (n >= bounds.min && n <= bounds.max) {
			freshCount++;
			break;
		}
	}

}

console.log(freshCount);

