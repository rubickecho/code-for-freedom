let name;

function getName() {
    return 'hello ' + name;
}

function setName(value) {
    name = value;
}

export default {
    name,
    getName,
    setName
}