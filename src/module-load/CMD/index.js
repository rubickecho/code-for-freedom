define(function (require) {
	var utils = require("./utils");
	console.log("utils:", utils); // {name: undefined, getName: ƒ, setName: ƒ}

	utils.setName("tom");
	console.log("utils.getName():", utils.getName()); // hello tom

	console.log("utils.name:", utils.name); // undefined
});
