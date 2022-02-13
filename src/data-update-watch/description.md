## 数据变更检测

1. 手动触发绑定
2. 脏检查机制
    原理：在ViewModel对象上某个属性变化时，先找到所有与该属性相关联的dom 元素，再对比数据变化，如果变化则执行Directive，更新数据，重新渲染
3. Object.definedProperies 数据劫持
    原理：通过Object.definedProperies劫持（监听）对象 get,set 方法，当触发 set 方法后，执行 directive，更新数据，重新渲染元素
4. ES6 Proxy 数据代理