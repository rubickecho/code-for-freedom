function *generator(value) {
    console.log("generator start");

    yield '1';

    console.log("generator yield 2");
    yield '2';

    console.log("generator yield value");
    yield value + ' ' + 'world';

    console.log("generator end");
}

const gen = generator('hello');

console.log("generator next 1");
console.log("value: ", gen.next().value);

console.log("generator next 2");
console.log("value: ", gen.next().value);

console.log("generator next value");
console.log("value: ", gen.next().value);

function getFood(foodName) {
    return new Promise((resove, reject) => {
        resove('hello ' + foodName);
    })
}

function *food() {
    console.log('food start');
    let responseApple = yield getFood('apple');
    console.log('responseApple: ', responseApple);

    let responseBanana = yield getFood('banana');
    console.log('responseBanana: ', responseBanana);

    let responseOrange = yield getFood('orange');
    console.log('responseOrange: ', responseOrange);

    console.log('food end');
}

let foodGen = food();

function getFoodGenPromise(foodGen) {
    console.log('foodGen.next().value: ', foodGen.next().value);
    // 返回一个promise
    return foodGen.next().value
}

// 开始执行，返回一个promise，并继续执行它的 then 方法
getFoodGenPromise(foodGen)
.then(function(value1) { // 当前 promise 执行完毕，返回一个新的 promise
    console.log('value1: ', value1);
    return getFoodGenPromise(foodGen);
}).then(function(value2) { // 当前 promise 执行完毕，返回一个新的 promise
    console.log('value2: ', value2);
    return getFoodGenPromise(foodGen);
}).then(function(value3) { // 当前 promise 执行完毕，结束
    console.log('value3: ', value3);
});
