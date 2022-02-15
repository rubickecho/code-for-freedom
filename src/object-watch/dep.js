/**
 * 依赖收集
 * 
 * 添加
 * 移除
 * 通知
 */
export default class Dep {

    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    depend(sub) {
        if (Dep.target) {
            Dep.target.addDep(this); // 调用 watcher，将当前 watcher 依赖收集
        }
    }

    remove(sub) {
        const index = this.deps.indexOf(sub);
        if (index > -1) {
            this.deps.splice(index, 1)
        }
    }

    notify() {
        const subs = this.subs.slice();
        for(let i = 0; i < subs.length; i++) {
            subs[i].update();
        }
    }
}