// 原型式继承
// ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型
function object(o) {
    function F() {};
    F.prototype = o;

    return new F();
}

const user = {
    name: 'jack',
    food: ['apple', 'banana', 'orange'],
}

const o1 = object(user);

console.log('o1.name:', o1.name); // jack
console.log('o1.food:', o1.food); // ['apple', 'banana', 'orange']

const o2 = object(user);
o2.name = 'tom';
o2.food.push('pear');
console.log('o2.name:', o2.name); // jack
console.log('o2.food:', o2.food); // ['apple', 'banana', 'orange', 'pear']

// 共享
console.log('o1.food:', o1.food); // ['apple', 'banana', 'orange', 'pear']