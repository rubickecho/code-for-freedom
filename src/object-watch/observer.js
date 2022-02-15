const { default: Dep } = require('./dep');
import { arrayMethods } from './array';
/**
 * 将整个对象都设置 getter、setter
 */
export default class Observer {
    constructor(obj) {
        if (Array.isArray(obj)) {
            proxyArray(obj, arrayMethods);
            this.observeArray(obj);
        } else { // is object
            this.walk(obj);
        }
    }

    walk(obj) {
        // 因为这里获取对象keys，所以会有两个问题
        // 1. 无法监测到增加的属性 => 官方API vm.$set
        // 2. 无法监测到删除的属性 => 官方API vm.$delete
        const keys = Object.keys(obj);
        for(let i = 0; i < keys.length; i++) {
            let val = obj[keys[i]];
            defineDirective(obj, keys[i], val);
        }
    }

    observeArray(items) {
        for(let i = 0; i < items.length; i++) {
            observer(items[i]);
        }
    }
}

export function observe(value) {
    let ob = undefined;
    if (value && value.__ob__) { // 防止重复观测
        ob = value.__ob__;
    } else if (Array.isArray(value) || typeof value === 'object') {
        ob = new Observer(value);
    }

    return ob;
}

// 代理数组原型部分方法
function proxyArray(target, src) {
    target.__proto__ = src;
}

function defineDirective(data, key, value) {
    let dep = new Dep();

    let childOb = observe(value);
    Object.defineProperty(data, 'name', {
        configurable: true,
        enumerable: true,
        get() {
            console.log('get value:', value);
            dep.depend();
            if (childOb) {
                childOb.depend();
                if (Array.isArray(value)) {
                    dependArray(value);
                }
            }
            return value;
        },
        set(newV) {
            console.log('set value:', newV);
            if (value === newV) {
                return 
            }
            value = newV;
            dep.notify();
        }
    })
}

function dependArray(items) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item && item.__ob__ && item.__ob__.dep) {
            item.__ob__.dep.depend();
        }
        if (Array.isArray(item)) {
            dependArray(item);
        }
    }
}