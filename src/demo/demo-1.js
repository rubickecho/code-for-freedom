(() => {
    /* 
        最小改动
      期望得到下面的结果
      1
      2
      3
      No.1 jsCoder
      es6
      ----------------
      No.2 jsCoder
      react
      ----------------
      No.3 jsCoder
      angular
    */
      const obj = {
        name: "jsCoder",
        skill: ["es6", "react", "angular"],
        say: function () {
            for (var i = 0, len = this.skill.length; i < len; i++) {
                setTimeout(function () {
                    console.log("No." + i + this.name);
                    console.log(this.skill[i]);
                    console.log("----------------");
                }, 0);
                console.log(i);
            }
        },
    };
    // obj.say();
})();

/** 
 * 1. 块级作用域
 * 2. this 指向，箭头函数
 * 箭头函数不会绑定 this
 *  */
 (() => {
    const obj = {
      name: "jsCoder",
      skill: ["es6", "react", "angular"],
      say: function () {
          for (let i = 0, len = this.skill.length; i < len; i++) {
                setTimeout(() => {
                    console.log("No." + (i + 1) + this.name);
                    console.log(this.skill[i]);
                    console.log("----------------");
                }, 0);
              console.log(i + 1);
          }
      },
  };
  obj.say();
})();