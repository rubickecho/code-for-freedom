Function.prototype.mockCall = function(o) {
    // this 即调用的这个函数
    
    var context = o || window; // 默认为null时，指向window
    var args = [];

    // 以上个例子为例，此时的arguments为：
    // arguments = {
    //      0: objFn,
    //      1: 'kevin',
    //      2: 18,
    //      length: 3
    // }
    // 因为arguments是类数组对象，所以可以用for循环
    for (var i = 1; i < arguments.length; i++) {
        // args.push(arguments[i]); // es6
        args.push(`arguments[${i}]`); // es5
    }
    
    // 将方法绑定到对象上
    context.fn = this;

    // 执行方法
    // context.fn(...args); // es6
    const result = eval(`context.fn(${args.join(',')})`); // es5

    // 删除该属性
    delete context.fn;

    return result;
}

var obj = {
    name: 'tom',
}

const objFn = function(age, colors) {
    console.log(this.name);
    console.log(age);
    console.log(colors);

    return {
        name: this.name,
        age: age,
        colors: colors
    }
}

// this 指向了obj
// objFn.call(obj, 24, ['white', 'yellow'])
const result = objFn.mockCall(obj, 24, ['white', 'yellow'])

console.log('result:', result);