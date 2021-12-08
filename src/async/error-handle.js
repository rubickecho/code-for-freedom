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
			reject("2");
		}, 1000);
	});
};

async function errorHandle () {
    try {
        const result1 = await p1();
        const result2 = await p2();
        console.log('errorHandle result1:', result1, result2);
    } catch (error) {
        console.log('errorHandle error:', error);
    }
}

errorHandle();

function errorHanlder (promise) {
    return promise.then((data) => {
        return [data, null]
    }).catch((error) => {
        return [null, error]
    })
}

async function errorHandle2 () {
    const [reault1, result1Err] = await errorHanlder(p1());
    if (result1Err) {
        console.log('p1 error:', result1Err);
    } else {
        console.log('p1 result:', reault1);
    }
    const [reault2, result2Err] = await errorHanlder(p2());
    if (result2Err) {
        console.log('p2 error:', result2Err);
    } else {
        console.log('p2 result:', reault2);
    }
}

errorHandle2();