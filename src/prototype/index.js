function Dog() {
    this.name = "Fido";
    this.color = "brown";
    this.numLegs = 4;
}

console.log('function Dog:', Dog); // function Dog: function Dog() { [native code] }
console.log('function Dog prototype:', Dog.prototype); // function Dog prototype: {constructor: ƒ, name: "Fido", color: "brown", numLegs: 4}
console.log('function Dog constructor:', Dog.prototype.constructor); // function Dog constructor: function Dog() { [native code] }

const dog = new Dog();

dog.name = "Spot";
dog.color = "white";

console.log('dog:', dog); // {name: "Spot", color: "white", numLegs: 4}
console.log('dog prototype:', dog.prototype); // dog prototype: undefined
console.log('dog __proto__:', dog.__proto__);  // {constructor: ƒ, name: "Fido", color: "brown", numLegs: 4}

console.log("Dog.prototype === dog.__proto__", Dog.prototype === dog.__proto__); // true
console.log("Dog.prototype.constructor === Dog: ", Dog.prototype.constructor === Dog); // true

console.log("Object.getPrototypeOf(dog) === dog.__proto__: ", Object.getPrototypeOf(dog) === dog.__proto__); // true