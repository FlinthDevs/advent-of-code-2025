import * as fs from 'node:fs';

const file = fs.readFileSync("input.txt", "utf8");
// const file = fs.readFileSync("simple.txt", "utf8");

const grid = file.split("\n").map(el => el.split("")).filter(el => el.length > 0);
const max = grid[0].length

// Init tachyon's tracking system and the first one
let tachyonPos = grid[0].indexOf("S");
const splits = [];
let paths = 0;
let y = 1;

console.log(grid.map(el => JSON.stringify(el)));

do {
	console.log("loop", y, tachyonPos, grid[y][tachyonPos]);

	if (grid[y][tachyonPos] === "^") {
		console.log("line ", y, " split left");
		grid[y][tachyonPos] = "l";
		splits.push({ x: tachyonPos, y });

		if (tachyonPos > 0) {
			console.log("move tachyon", tachyonPos, tachyonPos - 1);
			tachyonPos--;
		}
	} else if (grid[y][tachyonPos] === "l") {
		console.log("line ", y, " split right");
		grid[y][tachyonPos] = "^";

		if (tachyonPos < max - 1) {
			console.log("move tachyon", tachyonPos, tachyonPos + 1);
			tachyonPos++
		}
	}

	if (y === grid.length - 1) {
		console.log("good", y, grid.length);
		console.log(splits);
		paths++;

		if (splits.some(el => grid[el.y][el.x] === "l")) {
			const last = splits.pop();
			y = last.y;
			tachyonPos = last.x;
			console.log("new y", y);
		} else {
			break;
		}
	} else {
		console.log("bad", y, grid.length);
		y++;
	}
} while (y < grid.length)

console.log(paths);

