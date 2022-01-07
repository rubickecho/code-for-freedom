function spawn(genFn) {
    return new Promise((resolve, reject) => {
        const gen = genFn(); // 先将 generator 函数执行下，拿到遍历器对象

        function step(nextFn) {
            let next;
            try {
                next = nextFn(); // 尝试获取下一个值
            } catch (e) {
                return reject(e);
            }
            if (next.done) {
                return resolve(next.value);
            }
            Promise.resolve(next.value).then((res) => {
                step(() => {
                    return gen.next(res);
                })
            }, (error) => {
                step(() => {
                    return gen.throw(error);
                })
            })
        }

        step(() => {
            return gen.next();
        });
    })
}


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


function* gen() {
    console.log('start');
    const result1 = yield p1();
    console.log('p1 done, result: ', result1);
    const result2 = yield p2();
    console.log('p2 done, result: ', result2);
    const result3 = yield p3();
    console.log('p3 done, result: ', result3);

    console.log('end');
}

spawn(gen).then((res) => {
    console.log('spawn then res:', res);
});