(() => {
    /**
     * 全局上下文
     * 严格模式下都是相同结果
     */
    function globalContext() {
        console.log('global context:', this); // 全局上下文
        console.log(this == globalThis); // true
    }
    globalContext();

    'use strict';
    function strictGlobalContext() {
        console.log('strict global context:', this); // 全局上下文
        console.log(this == globalThis); // true
    }
    strictGlobalContext();
})();

