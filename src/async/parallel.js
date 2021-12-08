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
		}, 2000);
	});
};

const p3 = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("3");
		}, 3000);
	});
};

/**
 * 共计 3s
 * 因为 p1, p2, p3 三个异步操作都是并行执行的，所以共计 3s
 * 根据实际场景，选择 Promise.all 或 Promise.allSettled
 */
async function parallelDemo1() {
	console.log("start:", Date.now());
	Promise.all([p1(), p2(), p3()]).then((res) => {
		console.log("parallelDemo1 执行结果:", ...res);
    	console.log("end:", Date.now());
	});
}

/**
 * 共计 3s
 * 因为 p1, p2, p3 三个异步操作都是并行执行的，所以共计 3s
 */
async function parallelDemo2() {
	const r1 = p1();
	const r2 = p2();
	const r3 = p3();

	console.log("start:", Date.now());
	const result1 = await r1;
	console.log("result1:", result1);
	const result2 = await r2;
	console.log("result2:", result2);
	const result3 = await r3;
	console.log("result3:", result3);

	console.log("end:", Date.now());

	console.log("parallelDemo2 执行结果:", result1, result2, result3);
}

/**
 * 共计 6s
 * 因为 p1, p2, p3 三个异步操作都是串行执行的，所以共计 6s
 */
async function unParallelDemo() {
	console.log("start:", Date.now());
	const result1 = await p1();
	console.log("result1:", result1);
	const result2 = await p2();
	console.log("result2:", result2);
	const result3 = await p3();
	console.log("result3:", result3);

	console.log("end:", Date.now());

	console.log("parallelDemo2 执行结果:", result1, result2, result3);
}

parallelDemo1();

parallelDemo2();

unParallelDemo();
