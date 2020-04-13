// クラス定義
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    showName() {
        console.log("I am " + this.name);
    }
    
    showAge() {
        console.log("I am " + this.age + " years old");
    }
}

// Personを継承したHeroを定義



// Personオブジェクトの作成
const person = new Person("John", 19);
person.showName();
person.showAge();

console.log("----");

// Heroオブジェクトの作成

// 継承しているのでメソッドが呼び出せます

