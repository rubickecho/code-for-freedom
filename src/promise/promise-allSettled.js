
Promise.allSettled = function(args) {
    return new Promise(function(resolve, reject) {
        var result = [];
        var count = 0;
        var len = args.length;

        function res(i, val, isFulfilled = true) {
            try {
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    var then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, function(rs) {
                            res(i, rs, true);
                        }, function(err) {
                            res(i, err, false);
                        });
                        return;
                    }
                }
                if (isFulfilled) {
                    result[i] = { status: 'fulfilled', value: val };
                } else {
                    result[i] = { status: 'rejected', reason: val };
                }
                count++;
                if (count === len) {
                    return resolve(result);
                }
            } catch (error) {
                result[i] = { status: 'rejected', reason: error };
                count++;
                if (count === len) {
                    return resolve(result);
                }
            }
        }

        for (var i = 0; i < len; i++) {
            res(i, args[i]);
        }
    });
}

const test1 = Promise.allSettled([new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1')
    }, 1000)
}), new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('2');
    }, 2000)
}), new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3')
    }, 3000)
})]);
test1.then(function(res) {
    console.log('test1 res:', ...res)
}).catch((error) => {
    console.log('test1 error:', error)
})