import * as fs from 'node:fs';


// const file = await fs.readFileSync("simple2.txt", "utf8");
const file = await fs.readFileSync("input2.txt", "utf8");
// const file = await fs.readFileSync("test.txt", "utf8");

const lines = file.split("\n").map(l => l.split("-").filter(e => e !== "").map(e => parseInt(e))).sort((a,b) => a[0] - b[0]);
let sum = 0;

// Go through each interval
for (let i = 1; i < lines.length; i++) {
	// If current interval overlaps with the previous one.
	if (lines[i][0] <= lines[i-1][1] && lines[i][0] >= lines[i-1][0]) {
		// Merge current interval max with previous one if it overlaps.
		lines[i-1][1] = Math.max(lines[i][1], lines[i-1][1]);
		// Remove the merged interval.
		lines.splice(i, 1);
		// Since we removed the current element.
		i--;
	} else {
		// Else builds up the sum.
		sum += lines[i-1][1] - lines[i-1][0] +1 ;
	}
}

console.log(sum);

