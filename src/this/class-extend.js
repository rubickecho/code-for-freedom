/**
 * this 上下文，派生类
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#:~:text=%E8%87%AA%E8%BA%AB%E7%9A%84%E5%B1%9E%E6%80%A7%E3%80%82-,%E6%B4%BE%E7%94%9F%E7%B1%BB,-%E4%B8%8D%E5%83%8F%E5%9F%BA%E7%B1%BB
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

    class Child extends Parent {
        constructor(name, age) {
            // this.age = 18; // error，必须要在 super() 之后调用

            // 相当于执行 this = new Parent(x, y)
            super(name, age);

            this.name = 'tom';
        }

        getName() {
            return 'child name is ' + this.name;
        }
    }

    var child = new Child('jack', 20);
    console.log('child:', child); // Child { name: 'tom', age: 20 }
    console.log('child setName:', child.setName('rose'));
    console.log('child:', child); // Child { name: 'rose', age: 20 }
    console.log('child getName:', child.getName()); // rose

    // class Child2 extends Parent {

    // }
    // var child2 = new Child2('jack', 20);
    // console.log('child2:', child2); // Child2 { name: 'jack', age: 20 }
})();