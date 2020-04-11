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
class Hero extends Person {
}

// Personオブジェクトの作成
const person = new Person("John", 19);
person.showName();
person.showAge();

console.log("----");

// Heroオブジェクトの作成
const hero = new Hero("Alice", 16);
// 継承しているのでメソッドが呼び出せます
hero.showName();
hero.showAge();
