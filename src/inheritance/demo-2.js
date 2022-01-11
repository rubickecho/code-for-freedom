(() => {
	// 原型继承

	function animal(name) {
		this.name = name;
		this.colors = ["red", "blue", "green"];

        this.getName = function () {
            return this.name;
        };
	}

    animal.prototype.getColors = function() {
        console.log('animal.prototype.getColors:', this.colors)
    }

	function dog(name) {
        // 可以传参
        // 借调 animal 的构造函数，每个其实例都会拥有 animal 的属性和方法
		animal.call(this, name);
	}

	const dog1 = new dog('teddy');
	dog1.colors.push("black");
	console.log("dog1 getName:", dog1.getName()); // teddy
	// console.log("dog1 getColors:", dog1.getColors()); // dog1.getColors is not a function
	console.log("dog1.colors:", dog1.colors); // ['red', 'blue', 'green', 'black']

	const dog2 = new dog('labrador');
	console.log("dog2.name:", dog2.getName()); // labrador
	console.log("dog2.colors:", dog2.colors); // ['red', 'blue', 'green']
})();
