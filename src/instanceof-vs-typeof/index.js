(() => {
	console.log("---------typeof start---------");

	// 基本类型
	console.log(typeof 1); // number
	console.log(typeof false); // boolean
	console.log(typeof "hello"); // string

	// 引用类型
	console.log(typeof { name: "Tom" }); // object
	console.log(typeof [1, 2, 3]); // object

	// function
	console.log(typeof function () {}); // function

	// null
	console.log(typeof null); // object

	// undefined
	console.log(typeof test); // undefined
	console.log(typeof undefined); // undefined

    // symbol
    console.log(typeof Symbol()); // symbol

	console.log("---------typeof end---------");
	console.log("---------instance start---------");

	// 基本类型
	console.log(1 instanceof Number); // false

	// 引用类型
	console.log({ name: "Tom" } instanceof Object); // true

	// null
	console.log(null instanceof Object); // false

    // symbol
    console.log(Symbol() instanceof Symbol); // false

	// function
	console.log(function () {} instanceof Function); // true
	console.log(function () {} instanceof Object); // true
	console.log(Array instanceof Function); // true
	console.log(Array instanceof Object); // true

	// 继承
	function Parent() {}
	function Child() {}
	function Demo() {}

	Child.prototype = new Parent();
	var child = new Child();

	console.log(child instanceof Child); // true
	console.log(child instanceof Parent); // true
	console.log(child instanceof Object); // true
	console.log(child instanceof Demo); // false
	console.log("---------instance end---------");

	function A() {}
	function B() {}

	A.prototype = B.prototype = {};

	let a = new A();

	console.log(a instanceof B);
})();
