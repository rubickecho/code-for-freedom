function bar() {
    var myName = " 极客世界 "
    let test1 = 100
    if (1) {
        let myName = "Chrome 浏览器 "
        console.log('bar test1:', test1)
        console.log('bar test:', test)
        console.log('bar myName:', myName)
    }
}
function foo() {
    var myName = " 极客邦 "
    let test = 2
    {
        // let test = 3
        console.log('foo test:', test)
        bar()
    }
}
var myName = " 极客时间 "
let myAge = 10
let test = 1
foo()