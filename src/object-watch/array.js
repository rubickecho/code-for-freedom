const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsToPatch.forEach((patch) => {
    // 获取原始数组原型方法
    const original = arrayProto[patch];
    Object.defineProperty(arrayMethods, patch, {
        value: function(...args) {
            const result = original.apply(this, args);
            // 监测触发更新
            const ob = this.__ob__;
            let inserted;
            switch (patch) {
                case 'push':
                case 'unshift':
                    inserted = args;
                    break;
                case 'splice':
                    inserted = args.slice(2);
            }
            if (inserted) {
                ob.observeArray(inserted);
            }

            // 通知更新
            ob.dep.update();

            return result;
        },
        enumerable: false,
        writable: true,
        configurable: true,

    })
})