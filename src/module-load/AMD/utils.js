define(function () {
	let name;

	function getName() {
		return "hello " + name;
	}

	function setName(value) {
		name = value;
	}

	return {
		name,
		getName,
		setName,
	};
});
