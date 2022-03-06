let name;

function getName() {
    return 'hello ' + name;
}

function setName(value) {
    name = value;
}

module.exports = {
    name,
    getName,
    setName
}