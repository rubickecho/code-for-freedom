/**
 * 函数柯里化
 */
(() => {
    const curry = function(fn) {
        const arity = fn.length; // 获取参数个数

        return function $curry(...args) {
            console.log('args:', args);
            if (args.length === arity) {
                return fn.apply(this, args);
            } else {
                return function(...args2) {
                    return $curry.apply(this, args.concat(args2));
                }
            }
        }
    }

    const test = function(a, b, c) {
        return a + b + c;
    }

    const curriedTest = curry(test);
    const result = curriedTest(1)(2)(3);
    console.log('result:', result);
    
    const result2 = curriedTest(1)(2, 3);
    console.log('result2:', result2);
})();

/**
 * args: (1) [1]
 * args: (2) [1, 2]
 * args: (3) [1, 2, 3]
 * result: 6
 * args: (1) [1]
 * args: (3) [1, 2, 3]
 * result2: 6
 */