import Dep from "./dep";

export default class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm;
        this.expOrFn = expOrFn;
        this.cb = cb;
        this.value = this.get();
    }

    get() {
        Dep.target = this;
        const value = this.getVMVal();
        Dep.target = null;
        return value;
    }

    getVMVal() {
        let expOrFn = this.expOrFn;
        let value;
        if (typeof expOrFn === 'function') {
            value = expOrFn.call(this.vm);
        } else {
            value = this.vm[expOrFn];
        }
        return value;
    }

    update() {
        const oldVal = this.value;
        const newVal = this.get();
        if (oldVal === newVal) {
            return;
        }
        this.value = newVal;
        this.cb.call(this.vm, newVal);
    }

    addDep(dep) {
        dep.addSub(this); // 添加到依赖收集器中
    }
}