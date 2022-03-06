define(function (require, exports, module) {
	let name;

	function getName() {
		return "hello " + name;
	}

	function setName(value) {
		name = value;
	}

    // require.async('https://unpkg.com/jquery@1.12.4/dist/jquery.js', function(jquery) {
    //     console.log('jquery loaded:', jquery);
    // })

	module.exports = {
        name,
        getName,
        setName
    }
});
