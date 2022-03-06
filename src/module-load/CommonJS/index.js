
// CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
const utils = require('./utils');

console.log('utils:', utils);

utils.setName('tom');
console.log('utils.getName():', utils.getName());

console.log('utils.name:', utils.name);
