import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

let sum = 0;
for (const pair of file.split(",")) {
	const [one, two] = pair.split("-");

	if (one.length === two.length && one.length % 2 !== 0) {
		continue;
	}

	const low = parseInt(one);
	const high = parseInt(two);

	for (let i = low; i <= high; i++) {
		const tmp = i.toString();

		if (tmp.length % 2 !== 0) {
			continue;
		}

		if (tmp.slice(0, tmp.length / 2) === tmp.slice(tmp.length / 2)) {
			sum += i;
		}
	}
}

console.log(sum);

