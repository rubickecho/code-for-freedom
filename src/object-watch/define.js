(() => {

    var data = {
        name: '',
        age: 20
    }

    function defineDirective(data, key, value) {
        Object.defineProperty(data, 'name', {
            configurable: true,
            enumerable: true,
            get() {
                console.log('get value:', value);
                return value;
            },
            set(newV) {
                console.log('set value:', newV);
                if (value === newV) {
                    return 
                }
                value = newV;
            }
        })
    }

    defineDirective(data, 'name', 'jack');
    // console.log('data.name:', data.name);
    data.name = 'tom';
    console.log('data.name:', data.name);
})();