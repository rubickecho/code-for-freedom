/**
 * 函数上下文
 * 调用方式决定了函数的上下文
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#:~:text=%E5%BD%93%E5%89%8D%E4%B8%8A%E4%B8%8B%E6%96%87%E8%BF%90%E8%A1%8C%E3%80%82-,%E5%87%BD%E6%95%B0%E4%B8%8A%E4%B8%8B%E6%96%87,-%E5%9C%A8%E5%87%BD%E6%95%B0%E5%86%85%E9%83%A8
 */
(() => {
    function fnContext() {
        console.log('fn context:', this); // 全局上下文
        console.log(this == globalThis); // true

        // 严格模式下，this 指向 undefined
        // 'use strict';
        // console.log('fn context:', this); // undefined
        // console.log(this == globalThis); // false
    }

    // 等同于 window.fnContext()
    fnContext();

    // x.fnContext()
    var fnObj = {
        name: 'jack'
    }
    fnObj.fn = fnContext;
    fnObj.fn(); // fn context: { name: 'jack', fn: f } false

    // bind
    var newFn = fnContext.bind(fnObj);
    newFn(); // fn context: { name: 'jack' } false

    // call
    fnContext.call(fnObj); // fn context: { name: 'jack' } false

    // apply
    fnContext.apply(fnObj); // fn context: { name: 'jack' } false
})();

