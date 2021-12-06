function* iterArr(arr) {
    if (Array.isArray(arr)) {
        for(let i = 0; i < arr.length; i++) {
            yield *iterArr(arr[i]);
        }
    } else {
        yield arr;
    }
}

const originArr = [1, [2, 3], [4, 5, 6], [[7, 8]], [[9, 10], 11]];
const targetArr = iterArr(originArr);

console.log("targetArr: ", ...targetArr);