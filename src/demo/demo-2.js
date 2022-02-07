// (() => {
//     var name = 'jack';
//     (function(){
//         console.log(name);
//     })()
// })()

(() => {
    var obj = { name: 'jack' }
    obj.getName = function getName() {
        console.log('this.name:', this.name)
        var self = this;
        function inner() {
            // console.log('self.name:', this.name)
            console.log('self.name:', self.name)
        }
        inner();
    }

    obj.getName()
    console.log('------------------')
    var demoGetName = obj.getName;
    demoGetName();
})()