const p1 = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("1");
		}, 1000);
	});
};

const p2 = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("2");
		}, 1000);
	});
};

const p3 = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("3");
		}, 1000);
	});
};

const arrP = [p1, p2, p3];

/**
 * map 同时执行
map start
3
p then start
map end
map await:  1
p then end
map await:  2
p then end
map await:  3
p then end
 */
function testMap() {
	console.log("map start");
	arrP.map(async (p) => {
		console.log("p then start");

		console.log("%s, map await: %s", Date.now(), await p());

		console.log("p then end");
	});
	console.log("map end");
}

/**
 * for 依次执行
for start
for p start
for end
for await:  1
for p end
for p start
for await:  2
for p end
for p start
for await:  3
for p end
 * 
 */
async function testFor() {
	console.log("for start");
	for (let i = 0; i < arrP.length; i++) {
		console.log("for p start");

		console.log("%s, for await: %s", Date.now(), await arrP[i]());

		console.log("for p end");
	}
	console.log("for end");
}

testFor();
