// 原型继承

function animal() {
    this.name = 'animal';
    this.colors = ['red', 'blue', 'green'];
}

animal.prototype.getName = function() {
    return this.name;
}

function dog() {
}

dog.prototype = new animal();

const dog1 = new dog();
console.log('dog1.name:', dog1.getName()); // animal
console.log('dog1.colors:', dog1.colors); // ['red', 'blue', 'green']

dog1.name = 'dog';
dog1.colors.push('black'); // 引用类型的值会共享
const dog2 = new dog();
console.log('dog2.name:', dog2.getName()); // animal
console.log('dog2.colors:', dog2.colors); // ['red', 'blue', 'green', 'black']