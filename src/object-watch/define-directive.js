const { default: Dep } = require('./dep');
const { default: Observer } = require('./observer');
function defineDirective(data, key, value) {
    if (typeof value === 'object') {
        new Observer(value);
    }
    let dep = new Dep();
    Object.defineProperty(data, 'name', {
        configurable: true,
        enumerable: true,
        get() {
            console.log('get value:', value);
            dep.depend(this);
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

export default defineDirective;