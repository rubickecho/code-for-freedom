(() => {
    function mockNew() {
        const obj = new Object();
        const fnContructor = [].shift.call(arguments); // 获取构造函数
        // obj.setPrototypeOf(fnContructor.prototype);

        // 重点1 将构造函数的原型指向对象，让对象可以访问其原型上属性
        obj.__proto__ = fnContructor.prototype;

        // 重点2 经典继承，将构造函数上属性复制到对象上
        const res = fnContructor.apply(obj, arguments);

        // 重点3 构造函数有执行结果，返回结果，否则返回对象
        return typeof res === 'object' ? res : obj;
    }

    function user() {
        this.name = "tom";
        this.age = 18;

        // 返回对象时
        return {
            name: this.name,
            age: this.age,
            habit: 'eat'
        }

        // 返回基本类型时
        // return 'hello world';
    }

    user.prototype.getName = function() {
        return this.name;
    }


    const newUser = mockNew(user);

    console.log('newUser', newUser);
    console.log('user.name', newUser.name);
    console.log('user.age', newUser.age);
    console.log('user.habit', newUser.habit);
    console.log('user.getName', newUser.getName());


    const _user = new user();
    console.log('_user.habit', _user.habit);
    console.log('_user.name', _user.name);
    console.log('_user.getName', _user.getName());
})()