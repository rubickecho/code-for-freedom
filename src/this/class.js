/**
 * 类中的 this
 * 在类的构造函数中，this 是一个常规对象。类中所有非静态的方法都会被添加到 this 的原型中
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#:~:text=%E7%A4%BA%E4%BE%8B%E6%89%80%E7%A4%BA%E3%80%82-,%E7%B1%BB%E4%B8%8A%E4%B8%8B%E6%96%87,-this%20%E5%9C%A8%C2%A0%E7%B1%BB
 * 
 */
(() => {
    class Parent {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            // 等同于 this.__proto__
            const proto = Object.getPrototypeOf(this);
            console.log(proto); // {constructor: ƒ, getName: ƒ, setName: ƒ}
        }
        
        getName() {
            return this.name;
        }

        setName(name) {
            this.name = name;
            return name;
        }

        // 静态方法不会绑定到实例上，它仅属于 Parent 类
        static getAge() {
            return this.age;
        }
    }

    var parent = new Parent('jack', 20);
    console.log('parent:', parent); // Parent { name: 'jack', age: 20 }
    console.log('parent setName:', parent.setName('tom')); // 在类中调用类方法，等同于 this.__proto__.setName()
    console.log('parent:', parent); // Parent { name: 'tom', age: 20 }
    console.log('parent getName:', parent.getName()); // 在类中调用类方法，等同于 this.__proto__.getName()
    console.log('parent getAge:', parent.getAge()); // Uncaught TypeError: parent.getAge is not a function，因为在 this.__proto__ 中没有 getAge 方法
})();