import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

let sum = 0;

for (const pair of file.split(",")) {
	const [one, two] = pair.split("-");

	const low = parseInt(one);
	const high = parseInt(two);

	for (let i = low; i <= high; i++) {
		const stack = i.toString();

		if (stack.slice(0, stack.length / 2) === stack.slice(stack.length / 2)) {
			sum += i;
			continue;
		}

		// Check for each combination up to half of the string.
		for (let l = 1; l < Math.ceil(stack.length / 2); l++) {
			if (stack.length % l !== 0) {
				continue;
			}

			const needle = stack.slice(0, l);

			// Repeat the needle until completion, to see if it matches the target.
			if (needle.repeat(stack.length / needle.length) === stack) {
				sum += i;
			}
		}
	}
}

console.log(sum);

