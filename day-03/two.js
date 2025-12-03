import * as fs from 'node:fs';

const file = await fs.readFileSync("input.txt", "utf8");
// const file = await fs.readFileSync("simple.txt", "utf8");

let sum = 0;
for (const l of file.split("\n")) {
	if (l === "") { continue;
	}

	const line = l.split("").map((el) => parseInt(el));

	const sortedOut = line.toSorted((a,b) => b - a).map((el) => el);

	// Quick win, if the two biggest numbers are equals, it's the biggest combination.
	let allEquals = true;

	for (let i = 1; i < 12; i++) {
		if (sortedOut[i] !== sortedOut[i-1]) {
			allEquals = false;
			break
		}
	}

	if (allEquals) {
		sum += sortedOut[i] * 111111111111;
	}

	const maxes = [];
	// Going from the biggest to lowest
	for (const n of sortedOut) {
		const target = line.indexOf(n);

		let max = -1;
		// Going in subset indexof(biggest) to end of array
		for (let i = line.indexOf(n)+1; i < line.length; i++) {
			if (line[i] > max) {
				max = line[i];
			}
		}
		// Found max, increase and stop. No edge case, there's always be a value there.
		if (max > -1) {
			sum += parseInt(`${n}${max}`);
			break;
		}
	}
}

console.log(sum);

