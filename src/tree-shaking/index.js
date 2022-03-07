function foo() {
    let name = 'foo';
    let age = 10;
    console.log('old name', name);
    function getName() {
        return name;
    }

    let title = '程序员';
    return title;
}

foo();

let bar = () => {
    var x = 1;
    console.log(x);

    function unused() {
        return 5;
    }

    return x;
    let c = x + 1;
    return c;
}

bar();