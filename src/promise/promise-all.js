/**
 * 手写实现 Promise.all 方法
 * 接受参数： interable 可迭代对象, Array, Map, Set, String
 * 执行处理：遍历执行可迭代对象中的每一个元素，并将结果放入一个数组中
 * 返回值： Promise 对象，携带执行结果数组，如果有一个执行失败，则返回失败的结果
 */
Promise.all = function(args) {
    return new Promise(function(resolve, reject) {
        if (args.length === 0) {
            return resolve([]);
        }

        var result = [];
        var count = 0;
        var len = args.length;

        function res(i, val) {
            try {
                console.log(val && (typeof val === 'object' || typeof val === 'function'));
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function(val) {
                            res(i, val);
                        }, reject);
                        return;
                    }
                    result[i] = val;
                    count++;
                    // if (++count === len) {
                    if (count === len) {
                        return resolve(result);
                    }
                }
            } catch(err) {
                console.log('error:', error)
                return reject(err)
            }
        }

        for (var i = 0; i < len; i++) {
            res(i, args[i]);
        }
    });
}

const test1 = Promise.all([new Promise((resolve, reject) => {
    // setTimeout(() => {
        resolve('1')
    // }, 1000)
}), new Promise((resolve, reject) => {
    // setTimeout(() => {
        resolve('2')
    // }, 2000)
}), new Promise((resolve, reject) => {
    // setTimeout(() => {
        resolve('3')
    // }, 3000)
})]);
test1.then(function(res) {
    console.log('test1 res', res)
}).catch((error) => {
    console.log('test1 error', error)
})