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
    
    
    
     
    attack() {
         console.log(this.name + "は" + this.weapon + "で攻撃した");
     }
}

// Magicianクラスの定義
class Magician extends Character {
    
    
    
    
    magic() {
         console.log(this.name + "は" + this.weapon + "で魔法攻撃をした");
    }
}

// オブジェクト作成

// メソッド呼び出し
superhero.showHp();
superhero.attack();
superhero.magic();

console.log("----");

// オブジェクト作成

// メソッド呼び出し
magician.showHp();
magician.attack();
magician.magic();
