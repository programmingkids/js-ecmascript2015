// クラス宣言と同時にモジュールとしてエクスポート
module.exports = class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    show() {
        console.log("I am " + this.name);
        console.log("I am " + this.age + " years old");
    }
};
