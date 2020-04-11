// Characterクラス定義
class Character {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    
    attack() {
        console.log(this.name + "は普通に攻撃した");
    }
    
    magic() {
        console.log(this.name + "は普通に魔法を使った");
    }
    
    showHp() {
        console.log(this.name + "のHPは" + this.hp);
    }
}

// SuperHeroクラスの定義
class SuperHero extends Character {
     constructor(name, hp, weapon) {
         super(name, hp);
         this.weapon = weapon;
     }
     
     attack() {
         console.log(this.name + "は" + this.weapon + "で攻撃した");
     }
}

// Magicianクラスの低具
class Magician extends Character {
    constructor(name, hp, weapon) {
        super(name, hp);
        this.weapon = weapon;
    }
    
    magic() {
         console.log(this.name + "は" + this.weapon + "で魔法攻撃をした");
    }
}

// オブジェクト作成
let superhero = new SuperHero("アナ", 20, "勇者の剣");
// メソッド呼び出し
superhero.showHp();
superhero.attack();
superhero.magic();

console.log("----");

// オブジェクト作成
let magician = new Magician("エルサ",30, "アイストルネード");
// メソッド呼び出し
magician.showHp();
magician.attack();
magician.magic();
