/**
 * 依赖收集
 * 
 * 添加
 * 移除
 * 通知
 */
class Dep {

    constructor() {
        this.subs = [];
    }

    add(sub) {
        this.deps.push(sub)
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