(() => {
    function user(habit, height) {
        this.name = 'tom';

        // console.log('this.name:', this.name);
        // console.log('this.age:', this.age);
        // console.log('habit:', habit);
        return {
            name: this.name,
            age: this.age,
            habit: habit,
            height: height
        }
    }

    const obj = {
        name: 'jack',
        age: 20,
    }

    // 返回一个新函数
    const newUser = user.bind(obj, 'run'); 
    console.log('newUser:', newUser(180));

    Function.prototype.bind2 = function(context) {
        const _this = this;
        const bindArgs = Array.prototype.slice.call(arguments, 1);
        const boundFn = function() {
            const args = Array.prototype.slice.call(arguments);
            // 参数可能有返回值
            // 两种途径传参时，合并参数
            return _this.apply(this instanceof boundFn ? this : context, [...bindArgs, ...args]); 
        }
        // 将原函数的原型指向boundFn的原型，这样在修改 boundfn 的原型时，原函数的原型也不会跟着修改
        var fn = function() {}
        // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
        fn.prototype = _this.prototype;
        boundFn.prototype = new fn();
        return boundFn;
    }

    const newUser2 = user.bind2(obj, 'run'); 
    console.log('newUser2:', newUser2(180));

    console.log('new newUser2:', new newUser2(170));
})()